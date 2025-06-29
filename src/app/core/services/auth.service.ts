import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _supabase: SupabaseService) { }

  async signUp(email: string, password: string) {
    const { data, error } = await this._supabase.client.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this._supabase.client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async getUser() {
    const { data, error } = await this._supabase.client.auth.getUser();
    if (error) throw error;
    return data.user;
  }
}
