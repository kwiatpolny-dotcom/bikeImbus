-- BikeImbus — nowe tabele w istniejącym projekcie Supabase
-- Uruchom w Supabase > SQL Editor

CREATE TABLE IF NOT EXISTS bikes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  owner_phone TEXT NOT NULL,
  owner_email TEXT DEFAULT '',
  brand TEXT DEFAULT '',
  model TEXT DEFAULT '',
  year TEXT DEFAULT '',
  frame_number TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bike_repairs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  bike_id UUID REFERENCES bikes(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  services JSONB DEFAULT '[]',
  notes TEXT DEFAULT '',
  order_number INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS service_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS workshop_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  ws_name TEXT DEFAULT '',
  ws_address TEXT DEFAULT '',
  ws_phone TEXT DEFAULT '',
  ws_email TEXT DEFAULT '',
  ws_nip TEXT DEFAULT '',
  logo_base64 TEXT DEFAULT '',
  UNIQUE(user_id)
);

-- Migration for existing installs:
-- ALTER TABLE workshop_settings ADD COLUMN IF NOT EXISTS logo_base64 TEXT DEFAULT '';
-- ALTER TABLE bike_repairs ADD COLUMN IF NOT EXISTS order_number INTEGER;
-- ALTER TABLE bike_repairs ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- RLS (ta sama strategia co Imbus: blokuje niezalogowanych, izolacja przez .eq('user_id') w zapytaniach)
ALTER TABLE bikes ENABLE ROW LEVEL SECURITY;
ALTER TABLE bike_repairs ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bikes_auth" ON bikes TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "bike_repairs_auth" ON bike_repairs TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "service_templates_auth" ON service_templates TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "workshop_settings_auth" ON workshop_settings TO authenticated USING (true) WITH CHECK (true);

GRANT SELECT, INSERT, UPDATE, DELETE ON bikes TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON bike_repairs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON service_templates TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON workshop_settings TO authenticated;
