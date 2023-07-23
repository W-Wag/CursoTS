// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Sergio'];
const dadosCliente2: [number, string, string] = [1, 'Sergio', 'Maicon'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Sergio', 'Maicon', 'João'];

// dadosCliente1[0] = 2
// dadosCliente2[1] = 'Jonas';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// readonly array
export const array: readonly string[] = ['1', '2', '3'];

console.log(array);
