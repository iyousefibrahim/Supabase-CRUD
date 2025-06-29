import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _supabase: SupabaseService) { }


  async getAllProducts(): Promise<Product[]> {
    const { data, error } = await this._supabase.client
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error.message);
      return [];
    }

    return data as Product[];
  }

  async addProduct(product: Omit<Product, 'id' | 'created_at'>): Promise<boolean> {
    const { error } = await this._supabase.client.from('products').insert([product]);

    if (error) {
      console.error('Error adding product:', error.message);
      return false;
    }

    return true;
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<boolean> {
    const { error } = await this._supabase.client
      .from('products')
      .update(updates)
      .eq('id', id);

    if (error) {
      console.error('Error updating product:', error.message);
      return false;
    }

    return true;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const { error } = await this._supabase.client
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting product:', error.message);
      return false;
    }

    return true;
  }
}
