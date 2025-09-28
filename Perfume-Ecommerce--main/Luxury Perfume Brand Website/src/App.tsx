import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Profile from './components/Profile';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';

export type Page = 'home' | 'catalog' | 'product' | 'profile' | 'cart' | 'about' | 'contact';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'men' | 'women' | 'unisex' | 'limited';
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const viewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'product') {
      setSelectedProduct(null);
    }
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
        {/* Floating Marble Background Pattern */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1628965582495-e84e68eaf90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwYnJvd24lMjB3aGl0ZXxlbnwxfHx8fDE3NTkwNDUxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Navigation 
          currentPage={currentPage}
          onNavigate={navigateTo}
          cartItemsCount={cartItemsCount}
          onCartToggle={() => setIsCartOpen(true)}
        />

        <main className="relative">
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Hero onExplore={() => navigateTo('catalog')} />
              </motion.div>
            )}

            {currentPage === 'catalog' && (
              <motion.div
                key="catalog"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Catalog 
                  onProductClick={viewProduct}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              </motion.div>
            )}

            {currentPage === 'product' && selectedProduct && (
              <motion.div
                key="product"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              >
                <ProductDetail 
                  product={selectedProduct}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isInWishlist={wishlist.some(item => item.id === selectedProduct.id)}
                  onBack={() => navigateTo('catalog')}
                />
              </motion.div>
            )}

            {currentPage === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Profile wishlist={wishlist} onProductClick={viewProduct} />
              </motion.div>
            )}

            {currentPage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <About />
              </motion.div>
            )}

            {currentPage === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigateTo} />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </ThemeProvider>
  );
}