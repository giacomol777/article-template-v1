import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
      id={`product-${product.id}`}
    >
      <div className="flex flex-col items-center text-center mb-6">
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-3 hover:text-cyan-300 transition-colors">
            {product.name}
          </h2>
        </a>
        <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-lg mb-6">
          {product.badge}
        </div>
        {product.image && (
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md mx-auto hover:opacity-90 transition-opacity"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        )}
      </div>

      <div className="prose prose-invert max-w-none mt-6">
        {product.summary.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4" dangerouslySetInnerHTML={{
            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        ))}
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Pros</h3>
          <ul className="list-disc list-inside space-y-2">
            {product.pros.map((pro, index) => (
              <li key={index} dangerouslySetInnerHTML={{
                __html: pro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">Cons</h3>
          <ul className="list-disc list-inside space-y-2">
            {product.cons.map((con, index) => (
              <li key={index} dangerouslySetInnerHTML={{
                __html: con.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            ))}
          </ul>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Final Verdict</h3>
          {product.verdict.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-2" dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </motion.div>
  );
}