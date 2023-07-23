function multiplicaArgs(...args: number[]) {
  return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

export const result = multiplicaArgs(1, 2, 3, 4);
const concatenacao = concatenaString('a', 'b', 'c', 'd');
const paraMaisculo = toUpperCase('a', 'b', 'c', 'd');

console.log(result);
console.log(concatenacao);
console.log(paraMaisculo);
