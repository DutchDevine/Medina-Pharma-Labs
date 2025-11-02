import { sql } from "drizzle-orm";
import { pgTable, text, varchar, decimal, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type ProductCategory = 
  | "injectable-steroids" 
  | "hcg" 
  | "oral-sarms" 
  | "peptides";

export interface Product {
  id: string;
  name: string;
  chemicalName: string;
  category: ProductCategory;
  brand: "MEDINA" | "ENDOGENIC";
  concentration?: string;
  quantity?: string;
  priceEur: number;
  image?: string;
  description?: string;
  usage?: string;
  dosage?: string;
  benefits?: string[];
  warnings?: string[];
  ingredients?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
