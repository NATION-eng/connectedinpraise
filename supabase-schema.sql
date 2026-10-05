-- Connected in Praise 2026 Database Schema
-- Run this in your Supabase SQL Editor (https://app.supabase.com)

-- 1. Prayer Requests Table
CREATE TABLE IF NOT EXISTS prayer_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL DEFAULT 'A Believer',
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  is_approved BOOLEAN DEFAULT true
);

-- Enable Row Level Security (RLS)
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved prayers
CREATE POLICY "Public can read approved prayers"
  ON prayer_requests FOR SELECT
  USING (true);

-- Allow anyone to insert a prayer request
CREATE POLICY "Public can insert prayer requests"
  ON prayer_requests FOR INSERT
  WITH CHECK (true);


-- 2. Contact Messages & Inquiries Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  is_read BOOLEAN DEFAULT false
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public visitors to submit inquiries
CREATE POLICY "Public can submit contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admins) can view contact messages
CREATE POLICY "Admins can view messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);
