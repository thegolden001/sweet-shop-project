import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, Shield, HeadphonesIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Fashion
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Redefined
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover the finest collection of traditional and contemporary clothing. 
                From elegant sarees to modern western wear, find your perfect style at Preego Digital India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/categories"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Collection"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600">Trusted by 10,000+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Free delivery on orders above ₹999</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return & exchange policy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Customer support anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium clothing that combines style, comfort, and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/products?category=traditional" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/8832878/pexels-photo-8832878.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Traditional Wear"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">Traditional Wear</h3>
                  <p className="text-sm opacity-90">Sarees, Kurtas & More</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=western" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Western Wear"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">Western Wear</h3>
                  <p className="text-sm opacity-90">Dresses, Tops & More</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=formal" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Formal Wear"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">Formal Wear</h3>
                  <p className="text-sm opacity-90">Blazers, Suits & More</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;