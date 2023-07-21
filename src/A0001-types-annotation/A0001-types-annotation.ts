/* eslint-disable  */

//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('teste');
// let big: bigint = 100n;

//Tipos de arrays
let array: number[] = [1, 2, 3];
let Numberarray: Array<number>= [1, 2, 3];

type Pessoa = {
  nome: string,
  idade: number,
  adulto?: boolean,
}

//Tipos de objetos
let pessoa: Pessoa = {
  nome: 'Luiz',
  idade: 30,
  adulto: true,
}

//Tipos de funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y:number) => number = (x, y) => x + y;
const result = soma(2, 3);
