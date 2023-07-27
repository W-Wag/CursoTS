type TemNome = {
  nome: string;
};
type TemSobrenome = {
  sobrenome: string;
};
type TemIdade = {
  idade: number;
};
type Pessoa = TemNome & TemSobrenome & TemIdade;

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Miranda',
};

console.log(pessoa);

// Module mode
export { pessoa };
