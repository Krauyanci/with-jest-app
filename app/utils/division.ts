import "server-only";

export function division(a: number, b: number) {
if (b === 0) return "Division by zero";
  return a/b;
}