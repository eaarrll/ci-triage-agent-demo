import { z } from "zod";
import { applyDiscount, round2 } from "./pricing/discount.js";
import { addTax } from "./pricing/tax.js";

export const LineItemSchema = z.object({
  sku: z.string().min(1),
  unitPrice: z.number().nonnegative(),
  quantity: z.number().int().positive(),
});

export type LineItem = z.infer<typeof LineItemSchema>;

export function subtotal(items: readonly LineItem[]): number {
  return round2(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0));
}

export function checkoutTotal(items: readonly LineItem[], country: string): number {
  const valid = z.array(LineItemSchema).parse(items);
  return addTax(applyDiscount(subtotal(valid)), country);
}
