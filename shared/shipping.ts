import type { CartItem } from "./schema";

export interface ShippingRate {
  weightUpToGrams: number;
  priceEur: number;
  label: string;
}

export const ORIGIN_COUNTRY = "Poland";

const DEFAULT_ITEM_WEIGHT_GRAMS = 100;

export const DHL_RATES_FROM_POLAND: ShippingRate[] = [
  { weightUpToGrams: 500, priceEur: 14.5, label: "tot 500 g" },
  { weightUpToGrams: 1000, priceEur: 17, label: "tot 1 kg" },
  { weightUpToGrams: 2000, priceEur: 21.5, label: "tot 2 kg" },
  { weightUpToGrams: 5000, priceEur: 32, label: "tot 5 kg" },
  { weightUpToGrams: 10000, priceEur: 48, label: "tot 10 kg" },
  { weightUpToGrams: 20000, priceEur: 74, label: "tot 20 kg" },
  { weightUpToGrams: 31500, priceEur: 110, label: "tot 31.5 kg" },
];

function parseWeightFromQuantity(quantity?: string): number {
  if (!quantity) return DEFAULT_ITEM_WEIGHT_GRAMS;

  const match = quantity.trim().toLowerCase().match(/^(\d+(?:[.,]\d+)?)\s*(mg|g|kg|ml|l)\b/);
  if (!match) return DEFAULT_ITEM_WEIGHT_GRAMS;

  const value = Number.parseFloat(match[1].replace(",", "."));
  const unit = match[2];

  if (Number.isNaN(value) || value <= 0) return DEFAULT_ITEM_WEIGHT_GRAMS;

  switch (unit) {
    case "mg":
      return Math.ceil(value / 1000);
    case "g":
    case "ml":
      return Math.ceil(value);
    case "kg":
    case "l":
      return Math.ceil(value * 1000);
    default:
      return DEFAULT_ITEM_WEIGHT_GRAMS;
  }
}

export function estimatePackageWeight(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const itemWeight = parseWeightFromQuantity(item.product.quantity);
    return sum + itemWeight * item.quantity;
  }, 0);
}

export function calculateDHLShipping(weightGrams: number): {
  price: number;
  tier: string;
  carrier: string;
} {
  if (weightGrams <= 0) {
    return {
      price: 0,
      tier: "Gratis",
      carrier: "DHL Express",
    };
  }

  const matchingTier =
    DHL_RATES_FROM_POLAND.find((rate) => weightGrams <= rate.weightUpToGrams) ??
    DHL_RATES_FROM_POLAND[DHL_RATES_FROM_POLAND.length - 1];

  return {
    price: matchingTier.priceEur,
    tier: matchingTier.label,
    carrier: "DHL Express",
  };
}
