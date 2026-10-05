import { createClient } from "@supabase/supabase-js";

// Direct project credentials with env override
const SUPABASE_PROJECT_URL = "https://zaidnzbsdboyyhdptfxz.supabase.co";
const SUPABASE_ANON_PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphaWRuemJzZGJveXloZHB0Znh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMzEwMTEsImV4cCI6MjEwNjgwNzAxMX0.4F8srSMxncWoMIfrhbhJx3-cdQVz02a5u3xHaIjSX0k";

const supabaseUrl =
  import.meta.env?.VITE_SUPABASE_URL ||
  import.meta.env?.NEXT_PUBLIC_SUPABASE_URL ||
  SUPABASE_PROJECT_URL;

const supabaseAnonKey =
  import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  import.meta.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  SUPABASE_ANON_PUBLIC_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("https://")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  : null;
