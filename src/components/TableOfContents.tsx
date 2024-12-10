import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Award, Shield, Zap } from 'lucide-react';
import { Product } from '../types';

interface TableOfContentsProps {
  products: Product[];
}

export function TableOfContents({ products }: TableOfContentsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400 flex items-center justify-center gap-2">
          <Star className="w-8 h-8" />
          Quick Navigation
          <Star className="w-8 h-8" />
        </h2>
        <div className="grid gap-4">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={`#product-${product.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex items-center bg-gray-700/50 hover:bg-gray-600/50 rounded-lg p-4 transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-pink-400 group-hover:text-pink-300 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  {index === 0 && <Award className="w-4 h-4 text-yellow-400" />}
                  {index === 1 && <Shield className="w-4 h-4 text-blue-400" />}
                  {index === 2 && <Zap className="w-4 h-4 text-green-400" />}
                  <p className="text-sm text-gray-300">{product.badge}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}