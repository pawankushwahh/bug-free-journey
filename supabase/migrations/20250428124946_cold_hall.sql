/*
  # Create events and gallery tables

  1. New Tables
    - `events`
      - `id` (serial, primary key)
      - `title` (text)
      - `description` (text)
      - `date` (date)
      - `time` (text)
      - `location` (text)
      - `created_at` (timestamptz)
    
    - `gallery`
      - `id` (serial, primary key)
      - `url` (text)
      - `title` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage events and gallery
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Create policies for events
CREATE POLICY "Allow public read access to events"
  ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for gallery
CREATE POLICY "Allow public read access to gallery"
  ON gallery
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage gallery"
  ON gallery
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);