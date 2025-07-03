import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Users, Zap } from 'lucide-react';

const PreOrderSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const benefits = [
    {
      icon: Star,
      title: 'Early Access',
      description: 'Be among the first to experience Nova 5G'
    },
    {
      icon: Zap,
      title: 'Special Pricing',
      description: 'Exclusive pre-order price of ₹5,000'
    },
    {
      icon: Users,
      title: 'VIP Support',
      description: 'Priority customer support and setup assistance'
    }
  ];

  return (
    <section id="pre-order" className="py-20 bg-gradient-to-br from-ai-blue via-ai-purple to-nova-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Be Among the First to
              <br />
              <span className="text-yellow-300">Own the Future</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8 max-w-lg"
            >
              Pre-order Nova 5G today and join the exclusive community of 
              early adopters who value privacy, performance, and innovation.
            </motion.p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pre-order Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-ai-blue px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white/90 transition-all duration-300"
                  >
                    <span>Reserve Your Nova 5G</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="bg-green-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">You're In!</h4>
                  <p className="text-white/80">
                    We'll notify you as soon as Nova 5G is available for pre-order.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotateY: [0, 10, 0, -10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl scale-110"
              />
              <img
                src="/Screenshot 2025-07-02 153602.png"
                alt="Nova 5G Pre-order"
                className="relative z-10 w-80 h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 -left-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
            >
              <div className="text-center text-white">
                <div className="text-2xl font-bold">₹5K</div>
                <div className="text-sm">Price</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 -right-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
            >
              <div className="text-center text-white">
                <div className="text-2xl font-bold">VIP</div>
                <div className="text-sm">Access</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;