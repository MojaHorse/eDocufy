import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ttxpuaelxfkzjrelfozo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0eHB1YWVseGZrempyZWxmb3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTMwODUsImV4cCI6MjA2OTk2OTA4NX0.axrEeKo2ukQ4d4h8hwJ0nPo4gyWCJBYhpkBC2-wG2h8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
