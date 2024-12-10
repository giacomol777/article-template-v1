import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Hero({ title, image }: HeroProps) {
  return (
    <div className="relative h-[500px] w-full mb-12">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}