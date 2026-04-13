import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateProductImage, generateProductImages } from "./imageGenerator";
import { calculateDHLShipping, ORIGIN_COUNTRY, estimatePackageWeight } from "@shared/shipping";
import { sendOrderConfirmation } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/shipping/calculate", (req, res) => {
    const rawWeight = req.query.weightGrams;
    const parsedWeight = typeof rawWeight === "string" ? Number(rawWeight) : Number.NaN;

    if (!Number.isFinite(parsedWeight) || parsedWeight < 0) {
      return res.status(400).json({ error: "Invalid weightGrams query parameter" });
    }

    const shipping = calculateDHLShipping(parsedWeight);
    return res.json({
      carrier: shipping.carrier,
      priceEur: shipping.price,
      tier: shipping.tier,
      originCountry: ORIGIN_COUNTRY,
      weightGrams: parsedWeight,
    });
  });

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

  // Order / checkout route
  app.post("/api/orders", async (req, res) => {
    try {
      const { customerName, customerEmail, address, city, postalCode, country, notes, items } = req.body;

      if (!customerName || !customerEmail || !address || !city || !postalCode || !country || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Verplichte velden ontbreken" });
      }

      const subtotalEur: number = items.reduce(
        (sum: number, item: { product: { priceEur: number }; quantity: number }) =>
          sum + item.product.priceEur * item.quantity,
        0
      );
      const estimatedWeightGrams = estimatePackageWeight(items);
      const shipping = calculateDHLShipping(estimatedWeightGrams);
      const totalEur = subtotalEur + shipping.price;

      const orderNumber = `MPL-${Date.now()}`;

      await sendOrderConfirmation({
        customerName,
        customerEmail,
        address,
        city,
        postalCode,
        country,
        notes,
        items,
        subtotalEur,
        shippingEur: shipping.price,
        totalEur,
        orderNumber,
      });

      return res.json({ success: true, orderNumber });
    } catch (error: any) {
      console.error("Error processing order:", error);
      return res.status(500).json({ error: "Bestelling verwerken mislukt", message: error?.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
