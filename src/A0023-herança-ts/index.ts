export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Aluno ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Bruno', 'Silva', 30, '123.456.789-10');
const cliente = new Cliente('João', 'Silva', 30, '123.456.789-10');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
