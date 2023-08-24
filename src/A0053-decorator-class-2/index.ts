@inverteNomeECor
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {}
}

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[0]);
    }

    inverte(valor: string) {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('roxo', 'Coruja');
console.log(animal);
