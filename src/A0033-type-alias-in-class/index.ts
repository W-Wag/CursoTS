type TipoNome = {
  nome: string;
};
type TipoSobrenome = {
  sobrenome: string;
};
type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Carlos', 'joao');
console.log(pessoa.nomeCompleto());
