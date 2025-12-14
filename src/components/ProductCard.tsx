import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              {discountPercentage}% OFF
            </div>
          )}
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviewCount})
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="text-sm text-gray-600">
              {product.inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;