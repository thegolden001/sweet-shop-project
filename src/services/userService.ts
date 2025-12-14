import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type User = Database['public']['Tables']['users']['Row'];
type UserInsert = Database['public']['Tables']['users']['Insert'];
type UserUpdate = Database['public']['Tables']['users']['Update'];

export const userService = {
  // Create user profile
  async createUserProfile(userData: UserInsert) {
    const { data, error } = await supabase
      .from('users')
      .insert(userData)
      .select()
      .single();

    return { data, error };
  },

  // Get user profile
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    return { data, error };
  },

  // Update user profile
  async updateUserProfile(userId: string, updates: UserUpdate) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    return { data, error };
  },

  // Delete user profile
  async deleteUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);

    return { data, error };
  }
};