// Application constants
export const APP_CONFIG = {
  name: 'Preego Digital India',
  description: 'Premium Fashion & Clothing',
  version: '1.0.0',
  contact: {
    email: 'info@preegodigital.com',
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India'
  }
};

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product/:id',
  CART: '/cart',
  ABOUT: '/about',
  CONTACT: '/contact',
  PROFILE: '/profile',
  ORDERS: '/orders'
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed'
} as const;

export const CATEGORIES = [
  { id: 'traditional', name: 'Traditional', icon: '🥻' },
  { id: 'western', name: 'Western', icon: '👗' },
  { id: 'casual', name: 'Casual', icon: '👕' },
  { id: 'formal', name: 'Formal', icon: '👔' },
  { id: 'ethnic', name: 'Ethnic', icon: '🎽' },
  { id: 'accessories', name: 'Accessories', icon: '👜' }
];