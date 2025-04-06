// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fsgyrfobwgwgvoiswetn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZ3lyZm9id2d3Z3ZvaXN3ZXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MTUyMjIsImV4cCI6MjA1OTM5MTIyMn0.XKI0eY94PJypfmdYo3Wu74qlFbPIYudAdBKZLihXj8M';
export const supabase = createClient(supabaseUrl, supabaseKey);