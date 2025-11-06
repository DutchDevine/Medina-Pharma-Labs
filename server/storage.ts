import { type User, type InsertUser, type Product } from "@shared/schema";
import { randomUUID } from "crypto";
import { products as productData } from "@shared/products";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  updateProductImage(id: string, imageUrl: string): Promise<void>;
  saveImageUrls(imageUrls: Map<string, string>): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    
    // Initialize with product data
    productData.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async updateProductImage(id: string, imageUrl: string): Promise<void> {
    const product = this.products.get(id);
    if (product) {
      product.image = imageUrl;
      this.products.set(id, product);
    }
  }

  async saveImageUrls(imageUrls: Map<string, string>): Promise<void> {
    for (const [productId, imageUrl] of imageUrls.entries()) {
      await this.updateProductImage(productId, imageUrl);
    }
  }
}

export const storage = new MemStorage();
