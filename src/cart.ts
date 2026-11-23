import { applyDiscount, round2 } from "./pricing/discount.js";
import { addTax } from "./pricing/tax.js";

export interface LineItem {
  sku: string;
  unitPrice: number;
  quantity: number;
}

export function subtotal(items: readonly LineItem[]): number {
  return round2(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0));
}

export function checkoutTotal(items: readonly LineItem[], country: string): number {
  return addTax(applyDiscount(subtotal(items)), country);
}
