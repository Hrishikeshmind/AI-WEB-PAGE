import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Smartphone } from 'lucide-react';

const PrivacySection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Built-in India',
      description: 'Designed and manufactured with Indian innovation and quality standards'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays on your device with advanced encryption and secure processing'
    },
    {
      icon: Eye,
      title: 'No Tracking',
      description: 'Zero data collection, no ads, no surveillance - just pure mobile experience'
    },
    {
      icon: Smartphone,
      title: 'Nova OS',
      description: 'Custom privacy-focused operating system built for the modern user'
    }
  ];

  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              <span className="text-white">Style Meets</span>
              <br />
              <span className="bg-gradient-to-r from-ai-blue to-nova-pink bg-clip-text text-transparent">
                Safety
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              Built in India, built for privacy. Experience the future of mobile 
              technology without compromising your personal data.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-ai-blue mb-3" />
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Glass Phone Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-ai-blue/30 to-nova-purple/30 rounded-3xl blur-3xl scale-110"
              />

              {/* Glass Effect Overlay */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl backdrop-blur-sm border border-white/20"
              />

              <img
                src="/Screenshot 2025-07-02 153609.png"
                alt="Nova 5G Privacy Features"
                className="relative z-10 w-80 h-auto drop-shadow-2xl"
              />

              {/* Floating Security Badges */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -left-8 bg-gradient-to-r from-ai-blue to-ai-purple rounded-2xl p-4 shadow-xl"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-nova-pink to-nova-purple rounded-2xl p-4 shadow-xl"
              >
                <Lock className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Built in India, Built for Privacy
            </h3>
            <p className="text-gray-300 mb-6">
              Join the revolution of privacy-first mobile technology. 
              Your data, your device, your choice.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-ai-blue to-ai-purple text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Nova OS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;