import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, CreditCard, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CartItem } from '../App';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    onRemoveItem(productId);
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep('confirmation');
  };

  const resetCart = () => {
    setStep('cart');
    items.forEach(item => onRemoveItem(item.id));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-amber-50 to-amber-100">
            <h2 className="text-xl text-amber-900">
              {step === 'cart' && 'Shopping Cart'}
              {step === 'checkout' && 'Checkout'}
              {step === 'confirmation' && 'Order Confirmed'}
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {/* Cart View */}
              {step === 'cart' && (
                <motion.div
                  key="cart"
                  initial={{ x: 0 }}
                  exit={{ x: -300 }}
                  className="p-6"
                >
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg text-gray-500 mb-2">Your cart is empty</h3>
                      <p className="text-gray-400">Add some fragrances to get started</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                          >
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-900">{item.name}</h4>
                              <p className="text-sm text-amber-700">${item.price}</p>
                              
                              <div className="flex items-center space-x-2 mt-2">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-6 h-6 bg-white rounded border flex items-center justify-center"
                                >
                                  <Minus size={12} />
                                </motion.button>
                                
                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-6 h-6 bg-white rounded border flex items-center justify-center"
                                >
                                  <Plus size={12} />
                                </motion.button>
                              </div>
                            </div>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleRemoveItem(item.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </motion.div>
                        ))}
                      </div>

                      {/* Order Summary */}
                      <div className="bg-amber-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Shipping</span>
                          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span>Total</span>
                          <span className="text-amber-900">${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => setStep('checkout')}
                        className="w-full mt-6 bg-amber-800 hover:bg-amber-900"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                    </>
                  )}
                </motion.div>
              )}

              {/* Checkout View */}
              {step === 'checkout' && (
                <motion.div
                  key="checkout"
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  className="p-6"
                >
                  <form className="space-y-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-4">Shipping Address</h3>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => setFormData({...formData, city: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="zipCode">ZIP Code</Label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-4">Payment Information</h3>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="flex justify-between text-lg">
                        <span>Total</span>
                        <span className="text-amber-900">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep('cart')}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleCheckout}
                        disabled={isProcessing}
                        className="flex-1 bg-amber-800 hover:bg-amber-900"
                      >
                        {isProcessing ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          'Complete Order'
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Confirmation View */}
              {step === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  className="p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-green-600" />
                  </motion.div>

                  <h3 className="text-2xl text-gray-900 mb-4">Order Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been confirmed and will be shipped within 2-3 business days.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="text-sm text-gray-500 mb-2">Order Summary</h4>
                    <div className="space-y-1">
                      {items.map(item => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="text-amber-900">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button onClick={resetCart} className="w-full bg-amber-800 hover:bg-amber-900">
                    Continue Shopping
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}