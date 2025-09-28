import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Collection', page: 'catalog' as Page },
    { label: 'About Us', page: 'about' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  const categories = [
    'Women\'s Fragrances',
    'Men\'s Fragrances',
    'Unisex Collection',
    'Limited Editions',
    'Gift Sets',
    'Accessories'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="mb-4 text-2xl">Stay Connected</h3>
          <p className="mb-6 text-amber-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new fragrance launches, 
            and perfumery insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-amber-200"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-amber-900 hover:bg-amber-50">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Separator className="bg-white/20" />

      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 font-serif text-2xl tracking-wider">ESSENCIA</h2>
              <p className="text-amber-100 mb-6 leading-relaxed">
                Crafting extraordinary fragrances that capture the essence of luxury, 
                emotion, and artistry since 1998.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span className="text-sm text-amber-100">123 Luxury Ave, NYC</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span className="text-sm text-amber-100">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span className="text-sm text-amber-100">hello@essencia.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.page}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => onNavigate(link.page)}
                      className="text-amber-100 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => onNavigate('catalog')}
                      className="text-amber-100 hover:text-white transition-colors text-left"
                    >
                      {category}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-amber-200">Customer Service</h4>
                <p className="text-sm text-amber-100">Mon-Fri: 9AM-7PM EST</p>
                <p className="text-sm text-amber-100">Sat: 10AM-6PM EST</p>
                <p className="text-sm text-amber-100">Sun: 12PM-5PM EST</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-100 text-sm">
            © 2024 Essencia. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-amber-100 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-amber-100 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-amber-100 hover:text-white text-sm transition-colors"
            >
              Shipping Info
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-amber-100 hover:text-white text-sm transition-colors"
            >
              Returns
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}