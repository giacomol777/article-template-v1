# Article Template

This template provides a reusable structure for creating product review articles. Content can be provided through CSV files following a specific format.

## CSV Structure

### Required Headers

1. Article Metadata
   - `article_title`
   - `hero_image_url`

2. Introduction Section
   - `intro_paragraph_1`
   - `intro_paragraph_2`
   - ... (as many as needed)

3. Product Reviews (for each product N)
   - `product_N_name`
   - `product_N_image_url`
   - `product_N_badge`
   - `product_N_summary_1`
   - `product_N_summary_2`
   - `product_N_summary_3`
   - `product_N_pro_1` through `product_N_pro_5`
   - `product_N_con_1` and `product_N_con_2`
   - `product_N_verdict_1` and `product_N_verdict_2`
   - `product_N_affiliate_link`

4. Conclusion Section
   - `conclusion_paragraph_1`
   - `conclusion_paragraph_2`
   - ... (as many as needed)

## Text Formatting

- Use `**text**` for bold emphasis
- Paragraphs are automatically formatted
- URLs should be complete and accessible
- Affiliate links should include tracking parameters

## Example CSV Row

```csv
article_title,hero_image_url,intro_paragraph_1,...,product_1_name,product_1_image_url,...
"Best Products 2024","https://example.com/hero.jpg","First paragraph text",...,"Product Name","https://example.com/product.jpg",...
```

## Usage

1. Prepare your CSV file following the structure above
2. Use the csvParser utility to load your content
3. The template will automatically format and display your content with consistent styling