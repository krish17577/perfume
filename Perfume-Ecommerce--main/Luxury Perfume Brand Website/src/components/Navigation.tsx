import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartItemsCount: number;
  onCartToggle: () => void;
}

export default function Navigation({ currentPage, onNavigate, cartItemsCount, onCartToggle }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { page: 'home' as Page, label: 'Home' },
    { page: 'catalog' as Page, label: 'Collection' },
    { page: 'about' as Page, label: 'About' },
    { page: 'contact' as Page, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="font-serif tracking-wider text-amber-900">
              ESSENCIA
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative py-2 px-1 transition-colors ${
                  currentPage === item.page
                    ? 'text-amber-800'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('profile')}
              className="p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <User size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartToggle}
              className="relative p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="flex items-center justify-between pt-4 px-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onNavigate('profile');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <User size={20} />
                <span>Profile</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onCartToggle();
                  setIsMobileMenuOpen(false);
                }}
                className="relative flex items-center space-x-2 text-gray-600"
              >
                <ShoppingBag size={20} />
                <span>Cart</span>
                {cartItemsCount > 0 && (
                  <span className="bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}