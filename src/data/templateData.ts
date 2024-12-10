import { ArticleData } from '../types';

export const templateData: ArticleData = {
  title: "{{ARTICLE_TITLE}}",
  heroImage: "{{HERO_IMAGE_URL}}",
  subtitle: "{{ARTICLE_SUBTITLE}}",
  introduction: {
    paragraphs: [
      "{{INTRO_PARAGRAPH_1}}",
      "{{INTRO_PARAGRAPH_2}}",
      "{{INTRO_PARAGRAPH_3}}",
      "{{INTRO_PARAGRAPH_4}}",
      "{{INTRO_PARAGRAPH_5}}"
    ]
  },
  products: [
    {
      id: 1,
      name: "{{PRODUCT_NAME}}",
      image: "{{PRODUCT_IMAGE_URL}}",
      badge: "{{PRODUCT_BADGE}}",
      summary: "{{PRODUCT_SUMMARY_PARAGRAPH_1}}\n\n{{PRODUCT_SUMMARY_PARAGRAPH_2}}\n\n{{PRODUCT_SUMMARY_PARAGRAPH_3}}",
      pros: [
        "{{PRODUCT_PRO_1}}",
        "{{PRODUCT_PRO_2}}",
        "{{PRODUCT_PRO_3}}",
        "{{PRODUCT_PRO_4}}",
        "{{PRODUCT_PRO_5}}"
      ],
      cons: [
        "{{PRODUCT_CON_1}}",
        "{{PRODUCT_CON_2}}"
      ],
      verdict: "{{PRODUCT_VERDICT_PARAGRAPH_1}}\n\n{{PRODUCT_VERDICT_PARAGRAPH_2}}",
      link: "{{PRODUCT_AFFILIATE_LINK}}"
    }
  ],
  conclusion: {
    paragraphs: [
      "{{CONCLUSION_PARAGRAPH_1}}",
      "{{CONCLUSION_PARAGRAPH_2}}",
      "{{CONCLUSION_PARAGRAPH_3}}",
      "{{CONCLUSION_PARAGRAPH_4}}",
      "{{CONCLUSION_PARAGRAPH_5}}"
    ]
  }
};