/*
  # Create E-commerce Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `image` (text)
      - `product_count` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (integer)
      - `original_price` (integer)
      - `image` (text)
      - `images` (text array)
      - `category` (text)
      - `subcategory` (text)
      - `sizes` (text array)
      - `colors` (text array)
      - `in_stock` (boolean)
      - `stock_quantity` (integer)
      - `rating` (decimal)
      - `review_count` (integer)
      - `tags` (text array)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `users`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `name` (text)
      - `phone` (text)
      - `address` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `items` (jsonb)
      - `total` (integer)
      - `status` (text)
      - `shipping_address` (jsonb)
      - `payment_method` (text)
      - `payment_status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  image text,
  product_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  original_price integer,
  image text NOT NULL,
  images text[],
  category text NOT NULL,
  subcategory text,
  sizes text[] NOT NULL DEFAULT '{}',
  colors text[] NOT NULL DEFAULT '{}',
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  rating decimal(3,2) DEFAULT 0,
  review_count integer DEFAULT 0,
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  phone text,
  address jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  items jsonb NOT NULL,
  total integer NOT NULL,
  status text DEFAULT 'pending',
  shipping_address jsonb NOT NULL,
  payment_method text NOT NULL,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Categories policies (public read access)
CREATE POLICY "Categories are viewable by everyone"
  ON categories
  FOR SELECT
  TO public
  USING (true);

-- Products policies (public read access)
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Users policies (users can read/update their own data)
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Orders policies (users can read/create their own orders)
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Insert categories
INSERT INTO categories (name, description, product_count) VALUES
  ('Traditional', 'Traditional Indian clothing including sarees, kurtas, and ethnic wear', 45),
  ('Western', 'Modern western clothing including dresses, tops, and contemporary styles', 32),
  ('Casual', 'Comfortable everyday wear for all occasions', 28),
  ('Formal', 'Professional and formal attire for business and special events', 19),
  ('Ethnic', 'Traditional ethnic wear celebrating Indian heritage', 24),
  ('Accessories', 'Fashion accessories to complete your look', 16)
ON CONFLICT (name) DO NOTHING;

-- Insert sample products
INSERT INTO products (
  name, description, price, original_price, image, images, category, subcategory,
  sizes, colors, in_stock, stock_quantity, rating, review_count, tags, featured
) VALUES
  (
    'Premium Cotton Kurta Set',
    'Elegant traditional kurta set made from premium cotton fabric. Perfect for festivals and special occasions.',
    2499, 3499,
    'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'],
    'Traditional', 'Kurta Sets',
    ARRAY['S', 'M', 'L', 'XL', 'XXL'],
    ARRAY['White', 'Blue', 'Maroon', 'Black'],
    true, 25, 4.5, 128,
    ARRAY['traditional', 'cotton', 'festive', 'comfortable'],
    true
  ),
  (
    'Silk Saree with Blouse',
    'Beautiful handwoven silk saree with matching blouse piece. Exquisite craftsmanship for special occasions.',
    4999, 6999,
    'https://images.pexels.com/photos/8832878/pexels-photo-8832878.jpeg?auto=compress&cs=tinysrgb&w=800',
    NULL,
    'Traditional', 'Sarees',
    ARRAY['Free Size'],
    ARRAY['Red', 'Gold', 'Green', 'Purple'],
    true, 15, 4.8, 89,
    ARRAY['silk', 'traditional', 'wedding', 'handwoven'],
    true
  ),
  (
    'Designer Party Dress',
    'Stunning designer party dress with intricate embellishments. Perfect for cocktail parties and events.',
    3299, 4599,
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    NULL,
    'Western', 'Dresses',
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    ARRAY['Black', 'Navy', 'Wine', 'Emerald'],
    true, 20, 4.6, 156,
    ARRAY['party', 'designer', 'embellished', 'cocktail'],
    true
  ),
  (
    'Casual Cotton Shirt',
    'Comfortable cotton shirt for everyday wear. Versatile design suitable for both casual and semi-formal occasions.',
    1599, 2199,
    'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    NULL,
    'Casual', 'Shirts',
    ARRAY['S', 'M', 'L', 'XL', 'XXL'],
    ARRAY['White', 'Blue', 'Pink', 'Grey'],
    true, 40, 4.3, 203,
    ARRAY['casual', 'cotton', 'versatile', 'comfortable'],
    false
  ),
  (
    'Denim Jacket',
    'Classic denim jacket with modern fit. A timeless piece that pairs well with any outfit.',
    2799, 3899,
    'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=800',
    NULL,
    'Casual', 'Jackets',
    ARRAY['S', 'M', 'L', 'XL'],
    ARRAY['Light Blue', 'Dark Blue', 'Black'],
    true, 18, 4.4, 95,
    ARRAY['denim', 'classic', 'versatile', 'trendy'],
    true
  ),
  (
    'Formal Blazer',
    'Professional blazer perfect for office wear and formal events. Tailored fit with premium fabric.',
    4299, 5999,
    'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800',
    NULL,
    'Formal', 'Blazers',
    ARRAY['S', 'M', 'L', 'XL', 'XXL'],
    ARRAY['Black', 'Navy', 'Grey', 'Brown'],
    true, 12, 4.7, 67,
    ARRAY['formal', 'professional', 'tailored', 'premium'],
    true
  )
ON CONFLICT DO NOTHING;