import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, User, Product } from '../types';

interface Store {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  
  // UI
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (product, size, color, quantity = 1) => {
        const existingItem = get().cart.find(
          item => item.productId === product.id && item.size === size && item.color === color
        );
        
        if (existingItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          const newItem: CartItem = {
            id: `${product.id}-${size}-${color}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            color,
            quantity
          };
          set(state => ({ cart: [...state.cart, newItem] }));
        }
      },
      
      removeFromCart: (id) => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== id)
        }));
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set(state => ({
          cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      // User
      user: null,
      setUser: (user) => set({ user }),
      
      // UI
      isMenuOpen: false,
      setIsMenuOpen: (open) => set({ isMenuOpen: open }),
      
      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query })
    }),
    {
      name: 'preego-store',
      partialize: (state) => ({ cart: state.cart, user: state.user })
    }
  )
);