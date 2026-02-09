import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lzzmeqfydaxflcyczjal.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6em1lcWZ5ZGF4ZmxjeWN6amFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDEwNzMsImV4cCI6MjA4NjIxNzA3M30.PRBBDF9SQuQHGfgup8fzB_IBIL1IVedXCiyxPsycdmo';

export const supabase = createClient(supabaseUrl, supabaseKey);
