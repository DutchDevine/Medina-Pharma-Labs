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
<<<<<<< HEAD
=======
  image?: string;
  description?: string;
  usage?: string;
  dosage?: string;
  benefits?: string[];
  warnings?: string[];
  ingredients?: string;
>>>>>>> 34a4f782f312307699de96b76e2c43780e1deb25
}

export interface CartItem {
  product: Product;
  quantity: number;
}
