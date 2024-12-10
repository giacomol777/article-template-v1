import { ArticleData, Product } from '../types';

export function parseCSV(csvContent: string): ArticleData {
  const lines = csvContent.split('\n').map(line => line.split(','));
  const headers = lines[0];
  const data = lines[1];

  // Parse metadata
  const title = data[headers.indexOf('article_title')];
  const heroImage = data[headers.indexOf('hero_image_url')];

  // Parse introduction paragraphs
  const introParagraphs = [];
  let i = 1;
  while (headers.includes(`intro_paragraph_${i}`)) {
    introParagraphs.push(data[headers.indexOf(`intro_paragraph_${i}`)]);
    i++;
  }

  // Parse products
  const products: Product[] = [];
  let productIndex = 1;
  while (headers.includes(`product_${productIndex}_name`)) {
    const product: Product = {
      id: productIndex,
      name: data[headers.indexOf(`product_${productIndex}_name`)],
      badge: data[headers.indexOf(`product_${productIndex}_badge`)],
      image: data[headers.indexOf(`product_${productIndex}_image_url`)],
      summary: [1, 2, 3].map(i => 
        data[headers.indexOf(`product_${productIndex}_summary_${i}`)]
      ).filter(Boolean).join('\n\n'),
      pros: [1, 2, 3, 4, 5].map(i =>
        data[headers.indexOf(`product_${productIndex}_pro_${i}`)]
      ).filter(Boolean),
      cons: [1, 2].map(i =>
        data[headers.indexOf(`product_${productIndex}_con_${i}`)]
      ).filter(Boolean),
      verdict: [1, 2].map(i =>
        data[headers.indexOf(`product_${productIndex}_verdict_${i}`)]
      ).filter(Boolean).join('\n\n'),
      link: data[headers.indexOf(`product_${productIndex}_affiliate_link`)]
    };
    products.push(product);
    productIndex++;
  }

  // Parse conclusion paragraphs
  const conclusionParagraphs = [];
  i = 1;
  while (headers.includes(`conclusion_paragraph_${i}`)) {
    conclusionParagraphs.push(data[headers.indexOf(`conclusion_paragraph_${i}`)]);
    i++;
  }

  return {
    title,
    heroImage,
    introduction: {
      paragraphs: introParagraphs
    },
    products,
    conclusion: {
      paragraphs: conclusionParagraphs
    }
  };
}