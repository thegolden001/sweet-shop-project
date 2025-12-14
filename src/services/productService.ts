import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Product = Database['public']['Tables']['products']['Row'];
type ProductInsert = Database['public']['Tables']['products']['Insert'];

export const productService = {
  // Get all products with optional filters
  async getProducts(filters?: {
    category?: string;
    featured?: boolean;
    inStock?: boolean;
    search?: string;
    limit?: number;
    offset?: number;
  }) {
    let query = supabase
      .from('products')
      .select('*');

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters?.inStock !== undefined) {
      query = query.eq('in_stock', filters.inStock);
    }

    if (filters?.search) {
      query = query.textSearch('name,description,tags', filters.search);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1);
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;
    return { data, error };
  },

  // Get single product by ID
  async getProduct(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    return { data, error };
  },

  // Get featured products
  async getFeaturedProducts() {
    return this.getProducts({ featured: true, inStock: true });
  },

  // Search products
  async searchProducts(query: string) {
    return this.getProducts({ search: query, inStock: true });
  },

  // Get products by category
  async getProductsByCategory(category: string) {
    return this.getProducts({ category, inStock: true });
  }
};