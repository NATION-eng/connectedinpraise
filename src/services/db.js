import { supabase, isSupabaseConfigured } from "../lib/supabase";

const PRAYERS_STORAGE_KEY = "cip_prayer_wall_notes";
const CONTACTS_STORAGE_KEY = "cip_contact_messages";

/**
 * Fetch the latest 4-5 prayer requests
 */
export async function getLatestPrayers(limit = 5) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("prayer_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (!error && Array.isArray(data)) {
        if (data.length > 0) {
          return data.map((item) => ({
            id: item.id,
            author: item.name || item.author || "A Believer",
            text: item.text || item.message || "",
            time: formatRelativeTime(item.created_at),
            created_at: item.created_at,
          }));
        }
      } else if (error) {
        console.error("Supabase getLatestPrayers error:", error);
      }
    } catch (err) {
      console.warn("Supabase fetch exception, falling back to local database:", err);
    }
  }

  // Local fallback
  return getLocalPrayers().slice(0, limit);
}

/**
 * Save a new prayer request directly to Supabase cloud database
 */
export async function savePrayerRequest(name, text) {
  const author = name.trim() || "A Believer";
  const prayerText = text.trim();
  const createdAt = new Date().toISOString();

  let createdEntry = {
    id: `prayer-${Date.now()}`,
    author,
    text: prayerText,
    time: "Just now",
    created_at: createdAt,
  };

  // Push directly to cloud Supabase
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("prayer_requests")
        .insert([
          {
            name: author,
            text: prayerText,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase prayer insert error:", error);
      } else if (data && data.length > 0) {
        const row = data[0];
        createdEntry = {
          id: row.id,
          author: row.name || author,
          text: row.text || prayerText,
          time: "Just now",
          created_at: row.created_at || createdAt,
        };
        console.log("Successfully saved prayer to Supabase cloud:", createdEntry);
      }
    } catch (err) {
      console.error("Supabase prayer insert exception:", err);
    }
  }

  // Also cache locally for immediate offline/speed fallback
  try {
    const existing = getLocalPrayers();
    const updated = [createdEntry, ...existing.filter((p) => p.id !== createdEntry.id)];
    localStorage.setItem(PRAYERS_STORAGE_KEY, JSON.stringify(updated.slice(0, 20)));
  } catch (err) {
    console.error("Local storage sync note:", err);
  }

  return createdEntry;
}

/**
 * Save a new contact message directly to Supabase cloud database
 */
export async function saveContactMessage({ name, email, message }) {
  const createdAt = new Date().toISOString();
  let newMsg = {
    id: `msg-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    created_at: createdAt,
    time: "Just now",
  };

  // Push to cloud Supabase
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: newMsg.name,
            email: newMsg.email,
            message: newMsg.message,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase contact insert error:", error);
      } else if (data && data.length > 0) {
        newMsg.id = data[0].id;
        console.log("Successfully saved contact message to Supabase cloud:", newMsg);
      }
    } catch (err) {
      console.error("Supabase contact insert exception:", err);
    }
  }

  // Backup locally
  try {
    const existingRaw = localStorage.getItem(CONTACTS_STORAGE_KEY);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify([newMsg, ...existing]));
  } catch (err) {
    console.error("Local contact storage error:", err);
  }

  return newMsg;
}

/**
 * Helper to get local stored prayers
 */
function getLocalPrayers() {
  try {
    const raw = localStorage.getItem(PRAYERS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Relative time formatter helper
 */
function formatRelativeTime(isoString) {
  try {
    const diff = Date.now() - new Date(isoString).getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } catch {
    return "Recently";
  }
}
