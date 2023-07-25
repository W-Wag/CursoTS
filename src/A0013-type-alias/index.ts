type Idade = number;
type Cor = 'Vermelho' | 'Amarelo' | 'Azul';
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: Cor;
};

const obj: Pessoa = {
  nome: 'Luiz',
  idade: 30,
  salario: 1000,
  corPreferida: 'Amarelo',
};

function setCorPreferida(pessoa: Pessoa, cor: Cor): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(obj, 'Azul'));
export default 2;
