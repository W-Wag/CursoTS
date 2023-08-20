export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]) {
  const retorno = args.reduce((soma, value) => {
    if (isNumber(soma) && isNumber(value)) {
      return soma + value;
    }
    return soma;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
