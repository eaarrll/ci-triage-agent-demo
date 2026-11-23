import { describe, expect, it } from "vitest";
import { checkoutTotal, subtotal } from "../src/cart.js";

const basket = [
  { sku: "TEE-BLK-M", unitPrice: 25, quantity: 2 },
  { sku: "CAP-NVY", unitPrice: 18.5, quantity: 1 },
];

describe("cart", () => {
  it("sums line items", () => {
    expect(subtotal(basket)).toBe(68.5);
  });

  it("adds PH VAT without a discount below the threshold", () => {
    expect(checkoutTotal(basket, "PH")).toBe(76.72);
  });

  it("discounts then taxes a 100.00 order", () => {
    expect(checkoutTotal([{ sku: "JKT-OLV-L", unitPrice: 100, quantity: 1 }], "SG")).toBe(98.1);
  });

  it("rejects unknown countries", () => {
    expect(() => checkoutTotal(basket, "XX")).toThrow("no tax rate");
  });
});
