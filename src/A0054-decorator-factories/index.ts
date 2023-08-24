@inverteNomeECor('Valor 1', 'Valor 2')
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {}
}

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[1]);
        this.cor = this.inverte(args[0]);
      }

      inverte(valor: string) {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2;
      }
    };
  };
}

const animal = new Animal('roxo', 'Coruja');
console.log(animal);
