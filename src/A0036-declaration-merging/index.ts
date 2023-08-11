// Declaration merging
export interface Pessoa {
  nome: string;
}

export interface Pessoa {
  readonly sobrenome: string;
}

export interface Pessoa {
  readonly enderecos: readonly string[];
}

export interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
};

console.log(pessoa);
