export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // Método de acessar um atributo privado
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // Método redundante pois o nome já esta publico
  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Lojinha', '000.000.000-00');
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

empresa1.showColaboradores();
console.log(empresa1);
