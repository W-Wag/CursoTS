@decorator
export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
    }

    inverte(valor: string) {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('roxo');
console.log(animal);
