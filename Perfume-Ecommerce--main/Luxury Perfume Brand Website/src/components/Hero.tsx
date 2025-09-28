import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628965582495-e84e68eaf90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwYnJvd24lMjB3aGl0ZXxlbnwxfHx8fDE3NTkwNDUxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif mb-6 text-6xl lg:text-7xl xl:text-8xl text-amber-900 leading-tight"
            >
              Luxury
              <br />
              <span className="text-amber-700">Beyond</span>
              <br />
              Scent
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 text-xl text-gray-600 max-w-md mx-auto lg:mx-0"
            >
              Discover our exclusive collection of artisanal fragrances, 
              crafted with the finest ingredients and inspired by luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={onExplore}
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full group relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  Discover Collection
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Perfume */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610113550457-62d4de9cc267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWFyYmxlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTkwNDUxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury Perfume Bottle"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-amber-200 rounded-full opacity-60"
              />
              
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-amber-300 rounded-full opacity-40"
              />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-radial from-amber-300/30 to-transparent rounded-full filter blur-xl"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="cursor-pointer"
            onClick={onExplore}
          >
            <ChevronDown className="w-8 h-8 text-amber-700" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}