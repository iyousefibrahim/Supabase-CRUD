export interface Product {
  id: string;
  user_id: string;
  name: string;
  price: number;
  quantity: number;
  category?: string;
  image_url?: string;
  created_at: string;
}