export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  removeColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (!colaborador) return null;
    return colaborador;
  }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('João', 'Silva');
const colaborador2 = new Colaborador('João', 'Sena');
const colaborador3 = new Colaborador('João', 'Santos');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
empresa1.addColaborador({
  nome: 'João',
  sobrenome: 'De Fora',
});

empresa1.removeColaborador();
empresa1.showColaboradores();
console.log(empresa1);
