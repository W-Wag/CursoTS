@outroDecorador
@inverteNomeECor('Valor 1', 'Valor 2')
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {}
}

interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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

function outroDecorador(target: Constructor) {
  console.log('Sou o outro Decorador');
  return target;
}

const animal = new Animal('roxo', 'Coruja');
console.log(animal);
