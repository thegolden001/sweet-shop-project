import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Order = Database['public']['Tables']['orders']['Row'];
type OrderInsert = Database['public']['Tables']['orders']['Insert'];
type OrderUpdate = Database['public']['Tables']['orders']['Update'];

export const orderService = {
  // Create new order
  async createOrder(orderData: OrderInsert) {
    const { data, error } = await supabase
      .from('orders')
      .insert(orderData)
      .select()
      .single();

    return { data, error };
  },

  // Get user orders
  async getUserOrders(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    return { data, error };
  },

  // Get single order
  async getOrder(orderId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();

    return { data, error };
  },

  // Update order status
  async updateOrderStatus(orderId: string, status: string) {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)
      .select()
      .single();

    return { data, error };
  },

  // Update payment status
  async updatePaymentStatus(orderId: string, paymentStatus: string) {
    const { data, error } = await supabase
      .from('orders')
      .update({ payment_status: paymentStatus })
      .eq('id', orderId)
      .select()
      .single();

    return { data, error };
  }
};