import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

   supabaseUrl = 'https://pfklnerucgnyokusspmw.supabase.co';
  // Anon public key
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBma2xuZXJ1Y2dueW9rdXNzcG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTg4NjEsImV4cCI6MjA2Njc3NDg2MX0.UHgGG494vdT_wAYONxa4IoLu7fDUc9AoozZETN2917g';

  constructor(private supabase: SupabaseClient) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  get client() {
    return this.supabase;
  }

}
