// Nowy projekt Supabase dla BikeImbus — wklej swoje dane z Project Settings → API
const SUPABASE_URL = 'https://yvpsnxxbwsdcttmazvjf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cHNueHhid3NkY3R0bWF6dmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTU2NTcsImV4cCI6MjA5NjA3MTY1N30.TYGmOtQhwqFLJi9xouDZOQkIUro-__PGGNngndONXNE';

const { createClient } = window.supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
