#!/usr/bin/env tsx
/**
 * Script to generate product images using DALL-E
 * Usage: 
 *   npm run generate-images -- --product-id=<id>  # Generate for a single product
 *   npm run generate-images -- --all              # Generate for all products
 *   npm run generate-images -- --category=<cat>   # Generate for a category
 */

import { products } from "../shared/products";
import { generateProductImage, generateProductImages } from "./imageGenerator";
import { storage } from "./storage";

async function main() {
  const args = process.argv.slice(2);
  const productIdArg = args.find(arg => arg.startsWith('--product-id='));
  const categoryArg = args.find(arg => arg.startsWith('--category='));
  const allFlag = args.includes('--all');

  if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY environment variable is not set');
    console.error('Please set it using: export OPENAI_API_KEY=your-api-key');
    process.exit(1);
  }

  try {
    if (productIdArg) {
      // Generate for a single product
      const productId = productIdArg.split('=')[1];
      const product = products.find(p => p.id === productId);
      
      if (!product) {
        console.error(`Product with id "${productId}" not found`);
        process.exit(1);
      }

      console.log(`Generating image for product: ${product.name}`);
      const imageUrl = await generateProductImage(product);
      console.log(`✓ Image generated successfully!`);
      console.log(`  Product: ${product.name}`);
      console.log(`  URL: ${imageUrl}`);
      
    } else if (categoryArg) {
      // Generate for a category
      const category = categoryArg.split('=')[1];
      const categoryProducts = products.filter(p => p.category === category);
      
      if (categoryProducts.length === 0) {
        console.error(`No products found in category "${category}"`);
        process.exit(1);
      }

      console.log(`Generating images for ${categoryProducts.length} products in category "${category}"`);
      const imageUrls = await generateProductImages(categoryProducts, (completed, total, productName) => {
        console.log(`[${completed}/${total}] Generated image for: ${productName}`);
      });
      
      console.log(`\n✓ Successfully generated ${imageUrls.size} images`);
      
    } else if (allFlag) {
      // Generate for all products
      console.log(`Generating images for all ${products.length} products...`);
      console.log('This may take a while. Press Ctrl+C to cancel.\n');
      
      const imageUrls = await generateProductImages(products, (completed, total, productName) => {
        console.log(`[${completed}/${total}] Generated image for: ${productName}`);
      });
      
      console.log(`\n✓ Successfully generated ${imageUrls.size} images`);
      
      // Save image URLs to storage
      await storage.saveImageUrls(imageUrls);
      console.log('✓ Image URLs saved to storage.');
      
      console.log('\nGenerated images:');
      Array.from(imageUrls.entries()).forEach(([id, url]) => {
        const product = products.find(p => p.id === id);
        console.log(`  - ${product?.name}: ${url}`);
      });
      
    } else {
      // Show usage
      console.log('Usage:');
      console.log('  npm run generate-images -- --product-id=<id>   # Generate for a single product');
      console.log('  npm run generate-images -- --category=<cat>    # Generate for a category');
      console.log('  npm run generate-images -- --all               # Generate for all products');
      console.log('\nAvailable categories:');
      console.log('  - injectable-steroids');
      console.log('  - hcg');
      console.log('  - oral-sarms');
      console.log('  - peptides');
      console.log('\nExample product IDs:');
      products.slice(0, 5).forEach(p => console.log(`  - ${p.id}: ${p.name}`));
    }
  } catch (error: any) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

main();
