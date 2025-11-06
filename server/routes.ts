import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateProductImage, generateProductImages } from "./imageGenerator";

export async function registerRoutes(app: Express): Promise<Server> {
  // Product routes
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      
      if (category && typeof category === 'string' && category !== 'all') {
        const products = await storage.getProductsByCategory(category);
        return res.json(products);
      }
      
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProductById(id);
      
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // Image generation routes
  app.post("/api/products/:id/generate-image", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProductById(id);
      
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const imageUrl = await generateProductImage(product);
      
      // Update the product with the new image URL
      await storage.updateProductImage(id, imageUrl);
      
      res.json({ success: true, imageUrl, productId: id });
    } catch (error: any) {
      console.error("Error generating product image:", error);
      res.status(500).json({ 
        error: "Failed to generate product image",
        message: error?.message || "Unknown error"
      });
    }
  });

  app.post("/api/products/generate-all-images", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      
      // Start image generation asynchronously
      res.json({ 
        success: true, 
        message: "Image generation started",
        totalProducts: products.length 
      });

      // Generate images in the background
      generateProductImages(products, (completed, total, productName) => {
        console.log(`[Image Generation] Progress: ${completed}/${total} - Generated image for: ${productName}`);
      }).then(async (imageUrls) => {
        // Update all products with their new image URLs
        let successCount = 0;
        let errorCount = 0;
        
        for (const [productId, imageUrl] of Array.from(imageUrls.entries())) {
          try {
            await storage.updateProductImage(productId, imageUrl);
            successCount++;
          } catch (error) {
            console.error(`[Image Generation] Failed to update product ${productId}:`, error);
            errorCount++;
          }
        }
        
        console.log(`[Image Generation] Completed: ${successCount} successful, ${errorCount} errors out of ${products.length} total products`);
      }).catch((error) => {
        console.error("[Image Generation] Fatal error in batch image generation:", error);
        // In a production environment, this should trigger an alert/notification
      });
    } catch (error: any) {
      console.error("[Image Generation] Error starting batch image generation:", error);
      res.status(500).json({ 
        error: "Failed to start image generation",
        message: error?.message || "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
