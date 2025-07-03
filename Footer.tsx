import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, Phone, MapPin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = {
    Product: ['Features', 'Specifications', 'Colors', 'Accessories'],
    Support: ['Help Center', 'Contact Us', 'Warranty', 'Repairs'],
    Company: ['About AI+', 'Careers', 'Press', 'Investors'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance']
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                AI+
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pioneering the future of mobile technology with privacy-first innovation, 
              designed and built in India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-ai-blue" />
              <span className="text-gray-400">support@aiplus.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-ai-blue" />
              <span className="text-gray-400">1800-AI-PLUS</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-ai-blue" />
              <span className="text-gray-400">Bangalore, India</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AI+ Technologies. All rights reserved. Made in India with ❤️
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>🇮🇳</span>
            <span>Proudly Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;