// Builds the nightly sales report. Keeps every order in memory to compute percentiles.
const ORDERS = Number(process.env.REPORT_ORDERS ?? 200_000);

const orders = [];
for (let i = 0; i < ORDERS; i++) {
  orders.push({
    id: `ord_${i.toString(36).padStart(8, "0")}`,
    total: Math.round(Math.random() * 50_000) / 100,
    items: Array.from({ length: 1 + (i % 7) }, (_, j) => ({ sku: `SKU-${(i * 31 + j) % 977}`, qty: 1 + (j % 3) })),
    note: "x".repeat(64),
  });
}

const totals = orders.map((o) => o.total).sort((a, b) => a - b);
const pct = (p) => totals[Math.floor((totals.length - 1) * p)];
console.log(JSON.stringify({ orders: orders.length, p50: pct(0.5), p95: pct(0.95), p99: pct(0.99) }, null, 2));
