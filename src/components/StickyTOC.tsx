import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface StickyTOCProps {
  products: Product[];
}

export function StickyTOC({ products }: StickyTOCProps) {
  const [scrollY, setScrollY] = useState(0);
  const heroHeight = 500; // Match the hero height from Hero.tsx

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topPosition = Math.max(32, heroHeight - scrollY + 32);

  return (
    <div 
      className="fixed w-80 transition-all duration-200"
      style={{ top: `${topPosition}px` }}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-700"
      >
        <h2 className="text-xl font-bold mb-4 text-cyan-400 text-center">
          Quick Navigation
        </h2>
        <div className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={`#product-${product.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-center bg-gray-700/50 hover:bg-gray-600/50 rounded-lg p-3 transition-all duration-200"
            >
              <div className="flex-1">
                <h3 className="text-sm font-medium text-pink-400 group-hover:text-pink-300">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {product.badge}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}