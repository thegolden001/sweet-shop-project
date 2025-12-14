import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone } from 'lucide-react';
import { signUp, signIn } from '../lib/supabase';
import { userService } from '../services/userService';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        const { data, error } = await signUp(formData.email, formData.password, {
          name: formData.name,
          phone: formData.phone
        });

        if (error) throw error;

        if (data.user) {
          // Create user profile
          await userService.createUserProfile({
            id: data.user.id,
            email: formData.email,
            name: formData.name,
            phone: formData.phone || null
          });
        }

        alert('Account created successfully! Please check your email for verification.');
        onClose();
      } else {
        const { error } = await signIn(formData.email, formData.password);
        if (error) throw error;
        onClose();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Please wait...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="p-6 border-t text-center">
          <p className="text-gray-600">
            {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {mode === 'signin' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;