interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}
interface Idade {
  idade: number;
}
interface Peso {
  peso: number;
}
interface IdadePeso extends Idade, Peso {}

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Carlos', 'joao');
const pessoaObj: IdadePeso = {
  idade: 32,
  peso: 80,
};
console.log(pessoa.nomeCompleto());
console.log(pessoaObj);
