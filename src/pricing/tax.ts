import { round2 } from "./discount.js";

export const TAX_RATES: Record<string, number> = {
  PH: 0.12,
  SG: 0.09,
  AU: 0.1,
};

export function addTax(amount: number, country: string): number {
  const rate = TAX_RATES[country];
  if (rate === undefined) throw new Error(`no tax rate for ${country}`);
  return round2(amount * (1 + rate));
}
