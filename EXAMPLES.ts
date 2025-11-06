/**
 * Example: Using the Image Generation API
 * 
 * This file demonstrates how to use the product image generation functionality
 * both programmatically and via the REST API.
 */

// Example 1: Using the imageGenerator module directly
// =====================================================

import { generateProductImage, generateProductImages } from './server/imageGenerator';
import { products } from './shared/products';

async function example1_SingleProduct() {
  // Make sure OPENAI_API_KEY is set in your environment
  const product = products.find(p => p.id === 'test-enan');
  
  if (!product) {
    console.error('Product not found');
    return;
  }

  try {
    console.log(`Generating image for: ${product.name}`);
    const imageUrl = await generateProductImage(product);
    console.log(`Generated image URL: ${imageUrl}`);
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

async function example2_MultipleProducts() {
  // Generate images for all injectable steroids
  const injectableSteroids = products.filter(p => p.category === 'injectable-steroids');
  
  try {
    console.log(`Generating images for ${injectableSteroids.length} products...`);
    
    const imageUrls = await generateProductImages(
      injectableSteroids,
      (completed, total, productName) => {
        console.log(`[${completed}/${total}] Generated: ${productName}`);
      }
    );
    
    console.log(`\nSuccessfully generated ${imageUrls.size} images`);
    
    // Display results
    Array.from(imageUrls.entries()).forEach(([id, url]) => {
      const product = products.find(p => p.id === id);
      console.log(`${product?.name}: ${url}`);
    });
    
  } catch (error) {
    console.error('Error generating images:', error);
  }
}


// Example 2: Using the REST API
// ==============================

async function example3_RestAPI_SingleProduct() {
  const productId = 'test-enan';
  const apiUrl = `http://localhost:5000/api/products/${productId}/generate-image`;
  
  try {
    const response = await fetch(apiUrl, { method: 'POST' });
    const data = await response.json();
    
    if (data.success) {
      console.log('Image generated successfully!');
      console.log('Product ID:', data.productId);
      console.log('Image URL:', data.imageUrl);
    } else {
      console.error('Failed to generate image:', data.error);
    }
  } catch (error) {
    console.error('API request failed:', error);
  }
}

async function example4_RestAPI_AllProducts() {
  const apiUrl = 'http://localhost:5000/api/products/generate-all-images';
  
  try {
    const response = await fetch(apiUrl, { method: 'POST' });
    const data = await response.json();
    
    if (data.success) {
      console.log('Batch image generation started!');
      console.log('Total products:', data.totalProducts);
      console.log('Check server logs for progress...');
    } else {
      console.error('Failed to start generation:', data.error);
    }
  } catch (error) {
    console.error('API request failed:', error);
  }
}


// Example 3: Using curl commands
// ===============================

/*
# Generate image for a single product
curl -X POST http://localhost:5000/api/products/test-enan/generate-image

# Generate images for all products
curl -X POST http://localhost:5000/api/products/generate-all-images

# Get product details (including image URL after generation)
curl http://localhost:5000/api/products/test-enan

# Get all products
curl http://localhost:5000/api/products
*/


// Example 4: Understanding the image prompt generation
// ====================================================

/**
 * The system generates DALL-E prompts based on product properties:
 * 
 * For Injectable Steroids:
 * - "pharmaceutical vial with professional medical packaging"
 * - Brand: MEDINA (modern professional) or ENDOGENIC (scientific medical)
 * - Includes concentration and quantity information
 * - Professional studio lighting, white background
 * 
 * For HCG:
 * - "medical vial for hormone therapy with clinical packaging"
 * 
 * For Oral SARMs:
 * - "pharmaceutical tablet bottle with medical branding"
 * 
 * For Peptides:
 * - "peptide vial with scientific medical packaging"
 * 
 * Example generated prompt:
 * "A professional product photo of a pharmaceutical vial with professional 
 *  medical packaging labeled "Test Enan". The packaging features MEDINA brand 
 *  with modern professional design. Concentration: 300 mg/ml. Quantity: 10 ml. 
 *  The image should look like a high-quality pharmaceutical product photograph 
 *  with clean white background, professional studio lighting, sharp focus on 
 *  the product label showing "Test Enan" and "MEDINA" branding. Medical and 
 *  professional aesthetic, suitable for a pharmacy or medical supplier catalog."
 */


// Export examples (if needed)
export {
  example1_SingleProduct,
  example2_MultipleProducts,
  example3_RestAPI_SingleProduct,
  example4_RestAPI_AllProducts,
};
