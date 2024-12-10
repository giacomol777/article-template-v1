import React from 'react';
import { motion } from 'framer-motion';

interface IntroductionProps {
  paragraphs: string[];
}

export function Introduction({ paragraphs }: IntroductionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-12 max-w-3xl mx-auto"
    >
      <div className="space-y-6 text-gray-300">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="text-xl leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}