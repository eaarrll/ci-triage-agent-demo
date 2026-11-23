/** Orders at or above this subtotal get the volume discount. */
export const DISCOUNT_THRESHOLD = 100;
export const DISCOUNT_RATE = 0.1;

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function applyDiscount(subtotal: number): number {
  if (subtotal < 0) throw new RangeError("subtotal must be non-negative");
  if (subtotal >= DISCOUNT_THRESHOLD) return round2(subtotal * (1 - DISCOUNT_RATE));
  return round2(subtotal);
}
