import React from 'react';

interface ConclusionProps {
  paragraphs: string[];
}

export function Conclusion({ paragraphs }: ConclusionProps) {
  return (
    <section className="mt-12">
      <div className="h-px bg-cyan-400 my-8" />
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">Conclusion</h2>
      <div className="space-y-4 text-gray-300">
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
    </section>
  );
}