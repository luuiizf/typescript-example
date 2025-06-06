export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("Número deve ser positivo.");
  }
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
