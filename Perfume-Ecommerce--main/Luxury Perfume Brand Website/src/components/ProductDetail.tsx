import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, ShoppingBag, Star, Users, Award, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from '../App';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
  onBack: () => void;
}

export default function ProductDetail({ 
  product, 
  onAddToCart, 
  onToggleWishlist, 
  isInWishlist,
  onBack 
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [addedToCart, setAddedToCart] = useState(false);

  const sizes = [
    { size: '30ml', price: product.price - 30 },
    { size: '50ml', price: product.price },
    { size: '100ml', price: product.price + 40 },
  ];

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely stunning fragrance! Long-lasting and receives compliments.',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4,
      comment: 'Great scent profile, very sophisticated. Perfect for evening wear.',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      name: 'Emma Davis',
      rating: 5,
      comment: 'This has become my signature scent. The quality is exceptional.',
      date: 'March 8, 2024'
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
        onClick={onBack}
        className="flex items-center text-amber-700 hover:text-amber-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Collection
      </motion.button>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-xl"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full max-w-md mx-auto"
            />
            
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Premium Quality</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Truck className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Free Shipping</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Users className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Expert Crafted</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <Badge 
              className={`mb-4 ${
                product.category === 'limited' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {product.category === 'limited' ? 'Limited Edition' : product.category}
            </Badge>
            
            <h1 className="mb-4 font-serif text-4xl text-amber-900">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) 
                      ? 'text-amber-500 fill-current' 
                      : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg text-gray-900">Select Size</h3>
            <div className="flex gap-3">
              {sizes.map((sizeOption) => (
                <motion.button
                  key={sizeOption.size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(sizeOption.size)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedSize === sizeOption.size
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-sm text-gray-900">{sizeOption.size}</div>
                    <div className="text-lg text-amber-900">${sizeOption.price}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <motion.div className="flex-1">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-amber-800 hover:bg-amber-900 text-white relative overflow-hidden"
                disabled={addedToCart}
              >
                <motion.span
                  animate={addedToCart ? { scale: [1, 1.2, 1] } : {}}
                  className="flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </motion.span>
                
                {addedToCart && (
                  <motion.div
                    initial={{ scale: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-600 rounded-lg flex items-center justify-center"
                  >
                    ✓
                  </motion.div>
                )}
              </Button>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggleWishlist(product)}
              className={`p-4 rounded-xl border-2 transition-colors ${
                isInWishlist
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-gray-200 hover:border-red-300 text-gray-600'
              }`}
            >
              <Heart size={24} fill={isInWishlist ? 'currentColor' : 'none'} />
            </motion.button>
          </div>

          {/* Fragrance Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl text-gray-900">Fragrance Pyramid</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-amber-800">Top Notes</h4>
                <p className="text-gray-600">{product.notes.top.join(', ')}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="mb-2 text-amber-700">Heart Notes</h4>
                <p className="text-gray-600">{product.notes.middle.join(', ')}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="mb-2 text-amber-600">Base Notes</h4>
                <p className="text-gray-600">{product.notes.base.join(', ')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-lg"
      >
        <h2 className="mb-8 text-2xl text-gray-900">Customer Reviews</h2>
        
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-gray-900">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating 
                          ? 'text-amber-500 fill-current' 
                          : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}