import { supabase, isSupabaseConfigured } from "../lib/supabase";

const PRAYERS_STORAGE_KEY = "cip_prayer_wall_notes";
const CONTACTS_STORAGE_KEY = "cip_contact_messages";

// Initial seed notes for first-time visitors
const INITIAL_PRAYER_NOTES = [
  {
    id: "seed-1",
    author: "Sister Blessing D.",
    text: "Thanking God for the gift of sound and movement. Praying for total inclusion in this year's concert!",
    time: "2 hours ago",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-2",
    author: "Brother Emeka K.",
    text: "Praying for full recovery for my sister and asking God for peace for all families living with disabilities.",
    time: "4 hours ago",
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-3",
    author: "Elder Samuel",
    text: "May the holy spirit saturate the Convocation Arena and break every spiritual chain during Connected in Praise 2026.",
    time: "6 hours ago",
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-4",
    author: "Grace Amadi",
    text: "Lord, bless the Jerusalem Choir as they minister. May many souls come to know Your love.",
    time: "1 day ago",
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-5",
    author: "A Believer",
    text: "Grateful for life, health, and grace. Looking forward to Nov 4-7 in Port Harcourt!",
    time: "1 day ago",
    created_at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
  },
];

/**
 * Helper to get local stored prayers
 */
function getLocalPrayers() {
  try {
    const raw = localStorage.getItem(PRAYERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PRAYERS_STORAGE_KEY, JSON.stringify(INITIAL_PRAYER_NOTES));
      return INITIAL_PRAYER_NOTES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PRAYER_NOTES;
  } catch {
    return INITIAL_PRAYER_NOTES;
  }
}

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

      if (!error && data && data.length > 0) {
        return data.map((item) => ({
          id: item.id,
          author: item.name || item.author || "A Believer",
          text: item.text || item.message || "",
          time: formatRelativeTime(item.created_at),
          created_at: item.created_at,
        }));
      }
    } catch (err) {
      console.warn("Supabase fetch failed, falling back to local database:", err);
    }
  }

  // Local persistent database fallback
  const local = getLocalPrayers();
  return local.slice(0, limit);
}

/**
 * Save a new prayer request
 */
export async function savePrayerRequest(name, text) {
  const author = name.trim() || "A Believer";
  const prayerText = text.trim();
  const createdAt = new Date().toISOString();
  const newEntry = {
    id: `prayer-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    author,
    text: prayerText,
    time: "Just now",
    created_at: createdAt,
  };

  // Always update local persistent storage so refresh NEVER loses it
  try {
    const existing = getLocalPrayers();
    const updated = [newEntry, ...existing];
    localStorage.setItem(PRAYERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Local storage error:", err);
  }

  // Also push to cloud Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from("prayer_requests").insert([
        {
          name: author,
          text: prayerText,
          created_at: createdAt,
        },
      ]);
      if (error) {
        console.warn("Cloud Supabase insert note:", error.message);
      }
    } catch (err) {
      console.warn("Cloud Supabase insert warning:", err);
    }
  }

  return newEntry;
}

/**
 * Save a new contact message
 */
export async function saveContactMessage({ name, email, message }) {
  const createdAt = new Date().toISOString();
  const newMsg = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    created_at: createdAt,
    time: "Just now",
  };

  // Always update local persistent storage
  try {
    const existingRaw = localStorage.getItem(CONTACTS_STORAGE_KEY);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify([newMsg, ...existing]));
  } catch (err) {
    console.error("Local contact storage error:", err);
  }

  // Push to cloud Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: newMsg.name,
          email: newMsg.email,
          message: newMsg.message,
          created_at: createdAt,
        },
      ]);
      if (error) {
        console.warn("Cloud Supabase contact insert note:", error.message);
      }
    } catch (err) {
      console.warn("Cloud Supabase contact insert warning:", err);
    }
  }

  return newMsg;
}

/**
 * Get all contact messages stored locally
 */
export function getStoredContactMessages() {
  try {
    const raw = localStorage.getItem(CONTACTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
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
