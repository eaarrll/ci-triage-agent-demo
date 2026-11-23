/** Orders at or above this subtotal get the volume discount. */
export const DISCOUNT_THRESHOLD = 100;
export const DISCOUNT_RATE = 0.1;

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function isDiscountEligible(subtotal: number): boolean {
  return subtotal > DISCOUNT_THRESHOLD;
}

export function applyDiscount(subtotal: number): number {
  if (subtotal < 0) throw new RangeError("subtotal must be non-negative");
  return isDiscountEligible(subtotal) ? round2(subtotal * (1 - DISCOUNT_RATE)) : round2(subtotal);
}
