import { describe, expect, it } from "vitest";
import { applyDiscount, round2 } from "../src/pricing/discount.js";

describe("applyDiscount", () => {
  it("leaves small orders unchanged", () => {
    expect(applyDiscount(42.5)).toBe(42.5);
  });

  it("applies 10% at exactly the threshold", () => {
    expect(applyDiscount(100)).toBe(90);
  });

  it("applies 10% above the threshold", () => {
    expect(applyDiscount(250)).toBe(225);
  });

  it("rejects negative subtotals", () => {
    expect(() => applyDiscount(-1)).toThrow(RangeError);
  });
});

describe("round2", () => {
  it("rounds half up to cents", () => {
    expect(round2(1.005)).toBe(1.01);
  });
});
