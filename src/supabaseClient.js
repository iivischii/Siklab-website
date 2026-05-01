import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kmijvfzlqoctmpuheikq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaWp2ZnpscW9jdG1wdWhlaWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MTg4NjgsImV4cCI6MjA5MzE5NDg2OH0.QtuIuXTLR4E7MAJ9gnmBRFkLoyWMNCPRcQzggJhM1oQ'; // paste yours here

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);