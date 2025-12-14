export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: Address;
  createdAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}