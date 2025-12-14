export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          original_price: number | null;
          image: string;
          images: string[] | null;
          category: string;
          subcategory: string | null;
          sizes: string[];
          colors: string[];
          in_stock: boolean;
          stock_quantity: number;
          rating: number;
          review_count: number;
          tags: string[];
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          price: number;
          original_price?: number | null;
          image: string;
          images?: string[] | null;
          category: string;
          subcategory?: string | null;
          sizes: string[];
          colors: string[];
          in_stock?: boolean;
          stock_quantity?: number;
          rating?: number;
          review_count?: number;
          tags?: string[];
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          price?: number;
          original_price?: number | null;
          image?: string;
          images?: string[] | null;
          category?: string;
          subcategory?: string | null;
          sizes?: string[];
          colors?: string[];
          in_stock?: boolean;
          stock_quantity?: number;
          rating?: number;
          review_count?: number;
          tags?: string[];
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          phone: string | null;
          address: any | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          phone?: string | null;
          address?: any | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          phone?: string | null;
          address?: any | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          items: any;
          total: number;
          status: string;
          shipping_address: any;
          payment_method: string;
          payment_status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          items: any;
          total: number;
          status?: string;
          shipping_address: any;
          payment_method: string;
          payment_status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          items?: any;
          total?: number;
          status?: string;
          shipping_address?: any;
          payment_method?: string;
          payment_status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          image: string | null;
          product_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          image?: string | null;
          product_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          image?: string | null;
          product_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}