import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useAuth } from '../hooks/useAuth';
import { signOut } from '../lib/supabase';
import AuthModal from './AuthModal';

const Header = () => {
  const { cart, isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery } = useStore();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  const handleAuthClick = () => {
    if (user) {
      setShowUserMenu(!showUserMenu);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Preego Digital
                </h1>
                <p className="text-xs text-gray-500 -mt-1">India Pvt Ltd</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              
              <div className="relative">
                <button
                  onClick={handleAuthClick}
                  className="p-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <User className="w-5 h-5" />
                  {user && <span className="hidden sm:block text-sm">{user.user_metadata?.name || 'Account'}</span>}
                </button>

                {/* User Menu */}
                {showUserMenu && user && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Orders
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden py-3 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/categories"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                {!user && (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Sign In / Sign Up
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;