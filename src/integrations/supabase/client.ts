import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://danjwvmxmbseumqofdgd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmp3dm14bWJzZXVtcW9mZGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1ODc0OTUsImV4cCI6MjA2NTE2MzQ5NX0.RkPEf-H82xFrn2UzJRy-lG8VfONaxQTPhEExl1TQHWY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
