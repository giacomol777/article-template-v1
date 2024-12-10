import React from 'react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { TableOfContents } from './components/TableOfContents';
import { ProductCard } from './components/ProductCard';
import { Conclusion } from './components/Conclusion';
import { StickyTOC } from './components/StickyTOC';
import { articleData } from './data/articleData';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero 
        title={articleData.title}
        subtitle={articleData.subtitle}
        image={articleData.heroImage}
      />
      <div className="container mx-auto px-4">
        <div className="flex gap-8 relative">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <Introduction paragraphs={articleData.introduction.paragraphs} />
            <TableOfContents products={articleData.products} />
            <div className="space-y-8">
              {articleData.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Conclusion paragraphs={articleData.conclusion.paragraphs} />
          </div>
          
          {/* Sticky TOC */}
          <div className="hidden xl:block w-80 relative">
            <StickyTOC products={articleData.products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;