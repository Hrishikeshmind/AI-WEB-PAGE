import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ColorShowcase = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {
      name: 'Bold Black',
      color: '#1A1A1A',
      gradient: 'from-gray-900 to-gray-700',
      description: 'Sleek and professional',
      image: '/Screenshot 2025-07-02 153627.png'
    },
    {
      name: 'Serenity Purple',
      color: '#C8A8E9',
      gradient: 'from-purple-400 to-purple-600',
      description: 'Calm and sophisticated',
      image: '/Screenshot 2025-07-02 153609.png'
    },
    {
      name: 'Sky Blue',
      color: '#87CEEB',
      gradient: 'from-blue-400 to-blue-600',
      description: 'Fresh and vibrant',
      image: '/Screenshot 2025-07-02 153627.png'
    },
    {
      name: 'Blossom Pink',
      color: '#F8BBD9',
      gradient: 'from-pink-400 to-pink-600',
      description: 'Elegant and expressive',
      image: '/Screenshot 2025-07-02 153602.png'
    },
    {
      name: 'Nature Green',
      color: '#98D8C8',
      gradient: 'from-green-400 to-green-600',
      description: 'Natural and refreshing',
      image: '/Screenshot 2025-07-02 153627.png'
    }
  ];

  return (
    <section id="colors" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gray-900">In 5 Bold</span>
            <br />
            <span className="bg-gradient-to-r from-ai-blue to-nova-pink bg-clip-text text-transparent">
              Colours
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Built for Speed
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Express your personality with five stunning color options, 
            each crafted with premium materials and attention to detail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Color Selection */}
          <div className="space-y-6">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => setSelectedColor(index)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedColor === index
                    ? 'border-ai-blue bg-white shadow-xl scale-105'
                    : 'border-gray-200 bg-white/50 hover:border-gray-300 hover:bg-white/70'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${color.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    animate={selectedColor === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{color.name}</h3>
                    <p className="text-gray-600">{color.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone Display */}
          <div className="relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${colors[selectedColor].gradient} rounded-3xl blur-3xl scale-110 opacity-30`}
                  animate={{ 
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={colors[selectedColor].image}
                  alt={`Nova 5G ${colors[selectedColor].name}`}
                  className="relative z-10 w-80 h-auto drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Color Indicator */}
            <motion.div
              key={`indicator-${selectedColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${colors[selectedColor].gradient}`} />
                <span className="font-medium text-gray-900">{colors[selectedColor].name}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Color Dots Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mt-12"
        >
          {colors.map((color, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                selectedColor === index ? 'scale-125' : 'scale-100 opacity-60'
              }`}
              style={{ backgroundColor: color.color }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ColorShowcase;