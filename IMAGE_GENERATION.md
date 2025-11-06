# Product Image Generation with DALL-E

This project now includes automated product image generation using OpenAI's DALL-E API.

## Setup

1. **Set your OpenAI API Key**

   You need to set the `OPENAI_API_KEY` environment variable:

   ```bash
   export OPENAI_API_KEY=your-api-key-here
   ```

   For persistent configuration, you can create a `.env` file in the root directory:
   
   ```
   OPENAI_API_KEY=your-api-key-here
   ```

## Usage

### Command Line Interface

You can generate product images using the CLI script:

```bash
# Generate image for a single product
npm run generate-images -- --product-id=test-enan

# Generate images for all products in a category
npm run generate-images -- --category=injectable-steroids

# Generate images for all products (warning: this will take time and consume API credits)
npm run generate-images -- --all

# Show usage and available options
npm run generate-images
```

### REST API Endpoints

The server exposes two API endpoints for image generation:

#### Generate Image for Single Product

```bash
POST /api/products/:id/generate-image
```

Example:
```bash
curl -X POST http://localhost:5000/api/products/test-enan/generate-image
```

Response:
```json
{
  "success": true,
  "imageUrl": "https://oaidalleapiprodscus.blob.core.windows.net/...",
  "productId": "test-enan"
}
```

#### Generate Images for All Products

```bash
POST /api/products/generate-all-images
```

Example:
```bash
curl -X POST http://localhost:5000/api/products/generate-all-images
```

Response:
```json
{
  "success": true,
  "message": "Image generation started",
  "totalProducts": 70
}
```

Note: This endpoint starts the generation process asynchronously and returns immediately. Check server logs for progress.

## How It Works

1. **Image Generation**: The system uses DALL-E 3 to generate product images based on:
   - Product name and brand
   - Category (Injectable Steroids, HCG, Oral SARMs, Peptides)
   - Concentration and quantity information
   - Professional pharmaceutical aesthetic

2. **Prompt Engineering**: Each product gets a custom prompt designed to create professional pharmaceutical product photography with:
   - Clean white background
   - Professional studio lighting
   - Clear product labeling
   - Medical and professional aesthetic

3. **Storage**: Generated image URLs are stored in memory (updates the product objects in the storage layer)

4. **Rate Limiting**: The batch generation process includes 1-second delays between requests to avoid API rate limits

## API Costs

- DALL-E 3 Standard Quality (1024x1024): ~$0.040 per image
- Generating all 70 products: ~$2.80
- Consider testing with a few products first before generating all images

## Implementation Details

### Files Added/Modified

- `server/imageGenerator.ts` - Core image generation logic
- `server/routes.ts` - Added API endpoints
- `server/storage.ts` - Added updateProductImage method
- `server/generateImages.ts` - CLI script
- `package.json` - Added generate-images script

### Image Prompt Strategy

The system generates prompts that emphasize:
- Professional pharmaceutical product photography
- Brand identity (MEDINA vs ENDOGENIC)
- Product category-specific packaging
- Medical and clinical aesthetics
- Clear, readable labels with product information

## Testing

To test the image generation without consuming many API credits:

1. Test with a single product first:
   ```bash
   npm run generate-images -- --product-id=test-enan
   ```

2. Check the generated URL works by opening it in a browser

3. If satisfied, generate more images as needed

## Notes

- Generated image URLs from DALL-E are temporary (expire after some time)
- For production use, you should download and store the images permanently
- The current implementation stores URLs in memory only - they will be lost on server restart
- Consider implementing image downloading and local storage for production use
