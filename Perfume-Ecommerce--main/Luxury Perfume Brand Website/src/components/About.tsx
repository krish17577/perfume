import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '25+' },
    { icon: Sparkles, label: 'Unique Fragrances', value: '150+' },
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: Heart, label: 'Countries Served', value: '30+' }
  ];

  const timeline = [
    {
      year: '1998',
      title: 'The Beginning',
      description: 'Founded in Paris with a vision to create extraordinary fragrances that tell stories.'
    },
    {
      year: '2005',
      title: 'First Award',
      description: 'Won the International Fragrance Foundation Award for Innovation in Perfumery.'
    },
    {
      year: '2012',
      title: 'Global Expansion',
      description: 'Opened boutiques in New York, London, and Tokyo, bringing luxury to the world.'
    },
    {
      year: '2018',
      title: 'Sustainable Future',
      description: 'Launched our eco-friendly initiative using sustainable and ethical ingredients.'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Introduced our digital scent experience and personalized fragrance recommendations.'
    }
  ];

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative min-h-screen flex items-center justify-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709660274859-7f1b42c2c3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbWFraW5nJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTkwNDU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Perfume Laboratory"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-serif text-6xl lg:text-7xl text-amber-900"
          >
            Our Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            For over two decades, we've been crafting extraordinary fragrances that capture 
            the essence of luxury, emotion, and artistry. Each scent tells a unique story, 
            designed to evoke memories and create new ones.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-amber-200/30 rounded-full opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-1/4 right-16 w-16 h-16 bg-amber-300/40 rounded-full opacity-50"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-3xl lg:text-4xl text-amber-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-amber-50 to-amber-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-serif text-4xl text-amber-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that fragrance is more than just scent—it's an art form that connects 
                people to their deepest emotions and most cherished memories. Our mission is to 
                create exceptional fragrances using the finest ingredients, traditional techniques, 
                and innovative artistry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every bottle we create represents our commitment to quality, sustainability, and 
                the timeless art of perfumery. We source our ingredients ethically and work with 
                master perfumers who share our passion for excellence.
              </p>
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
                Learn More About Our Process
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709662217788-6a8a1b31562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBwZXJmdW1lJTIwZmFjdG9yeSUyMGFydGlzYW58ZW58MXx8fHwxNzU5MDQ1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan Perfumer"
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-amber-300 rounded-full opacity-70"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 font-serif text-4xl text-amber-900 text-center"
        >
          Our Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl text-amber-900 mb-2">{item.year}</h3>
                    <h4 className="text-xl text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-6 font-serif text-4xl text-amber-900">
            Join the Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover fragrances that speak to your soul and become part of our story. 
            Every scent is a new chapter waiting to be written.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-amber-800 hover:bg-amber-900 text-white px-12 py-4 text-lg"
            >
              Explore Our Collection
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}