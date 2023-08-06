export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  get cpf(): string {
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(valor: string) {
    console.log('Setter chamado');
    this._cpf = valor;
  }
}

const pessoa = new Pessoa('Bruno', 'Silva', 30, '123.456.789-10');
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
