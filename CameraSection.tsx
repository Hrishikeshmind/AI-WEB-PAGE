import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Zap, Shield, Sparkles } from 'lucide-react';

const CameraSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const features = [
    {
      icon: Camera,
      title: "Matrix AI Camera",
      description: "Advanced AI processing for perfect shots every time"
    },
    {
      icon: Zap,
      title: "Night Mode Pro",
      description: "Capture stunning photos even in low light conditions"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your photos stay yours with on-device processing"
    },
    {
      icon: Sparkles,
      title: "Smart HDR",
      description: "Balanced exposure across all lighting conditions"
    }
  ];

  return (
    <section ref={sectionRef} id="camera" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gray-900">Clarity in</span>
            <br />
            <span className="bg-gradient-to-r from-ai-blue to-nova-purple bg-clip-text text-transparent">
              Every Frame
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary 50MP dual camera system powered by AI+ technology 
            delivers professional-grade photography in your pocket.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Image */}
          <motion.div
            style={{ y, scale }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-nova-purple/30 to-ai-blue/30 rounded-3xl blur-3xl scale-110"
              />
              <img
                src="/Screenshot 2025-07-02 153616.png"
                alt="Nova 5G Camera Display"
                className="relative z-10 w-full max-w-md h-auto drop-shadow-2xl"
              />
              
              {/* Floating Camera Specs */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-ai-blue mb-1">50MP</div>
                  <div className="text-sm text-gray-600">Main Camera</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-nova-purple mb-1">12MP</div>
                  <div className="text-sm text-gray-600">Ultra Wide</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold mb-4 text-gray-900">
                Sharp. Clear. Secure.
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                With a 50MP dual camera system, your moments stay yours with 
                advanced on-device AI processing and privacy-first architecture.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/70 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-ai-blue mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraSection;