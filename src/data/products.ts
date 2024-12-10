import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Product Model Name 1",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    badge: "Best Overall Performance",
    summary: "This premium model's **advanced technology** delivers exceptional results across all our test scenarios.\n\nDuring our extensive testing period, we were consistently impressed by its **outstanding capabilities** and intelligent features that adapted to various situations.\n\nWhile positioned in the premium category, this model justifies its price through superior performance and reliability, though we noted some minor areas for improvement.",
    pros: [
      "**Key Feature 1:** Technical specification details",
      "**Key Feature 2:** Performance highlights",
      "**Key Feature 3:** Notable capability",
      "**Key Feature 4:** Unique selling point",
      "**Key Feature 5:** Additional benefit"
    ],
    cons: [
      "**Limitation 1:** Description of primary drawback",
      "**Limitation 2:** Description of secondary drawback"
    ],
    verdict: "After thorough testing, this model stands out as a **top performer** in its category, consistently delivering impressive results across various scenarios.\n\nWhile the premium price point might give some pause, the combination of **advanced features** and reliable performance makes it a worthwhile investment for those seeking the best possible experience.",
    link: "#"
  }
];