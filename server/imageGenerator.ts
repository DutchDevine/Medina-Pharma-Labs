import OpenAI from "openai";
import type { Product } from "@shared/schema";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

/**
 * Generates a product image using DALL-E based on product details
 * @param product The product to generate an image for
 * @returns The URL of the generated image
 */
export async function generateProductImage(product: Product): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY environment variable is not set");
  }

  // Create a detailed prompt for DALL-E based on product information
  const prompt = createImagePrompt(product);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "vivid",
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) {
      throw new Error("No image URL returned from DALL-E");
    }

    return imageUrl;
  } catch (error) {
    console.error(`Error generating image for product ${product.id}:`, error);
    throw error;
  }
}

/**
 * Creates a detailed prompt for DALL-E image generation
 * @param product The product to create a prompt for
 * @returns A detailed prompt string
 */
function createImagePrompt(product: Product): string {
  const categoryDescriptions: Record<string, string> = {
    "injectable-steroids": "pharmaceutical vial with professional medical packaging",
    "hcg": "medical vial for hormone therapy with clinical packaging",
    "oral-sarms": "pharmaceutical tablet bottle with medical branding",
    "peptides": "peptide vial with scientific medical packaging",
  };

  const categoryDesc = categoryDescriptions[product.category] || "pharmaceutical product";
  const brandStyle = product.brand === "MEDINA" 
    ? "MEDINA brand with modern professional design"
    : "ENDOGENIC brand with scientific medical design";

  // Create a professional, pharmaceutical-focused prompt
  const prompt = `A professional product photo of a ${categoryDesc} labeled "${product.name}". 
The packaging features ${brandStyle}. 
${product.concentration ? `Concentration: ${product.concentration}.` : ""}
${product.quantity ? `Quantity: ${product.quantity}.` : ""}
The image should look like a high-quality pharmaceutical product photograph with clean white background, 
professional studio lighting, sharp focus on the product label showing "${product.name}" and "${product.brand}" branding. 
Medical and professional aesthetic, suitable for a pharmacy or medical supplier catalog.`;

  return prompt.trim();
}

/**
 * Generates images for multiple products with rate limiting
 * @param products Array of products to generate images for
 * @param onProgress Optional callback for progress updates
 * @returns Map of product IDs to generated image URLs
 */
export async function generateProductImages(
  products: Product[],
  onProgress?: (completed: number, total: number, productName: string) => void
): Promise<Map<string, string>> {
  const imageUrls = new Map<string, string>();
  const total = products.length;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    try {
      console.log(`Generating image ${i + 1}/${total} for: ${product.name}`);
      const imageUrl = await generateProductImage(product);
      imageUrls.set(product.id, imageUrl);
      
      if (onProgress) {
        onProgress(i + 1, total, product.name);
      }

      // Rate limiting: wait 1 second between requests to avoid hitting API limits
      if (i < products.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Failed to generate image for ${product.name}:`, error);
      // Continue with other products even if one fails
    }
  }

  return imageUrls;
}
