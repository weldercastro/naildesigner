export interface Service {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
  price: number;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}
