let x = 10; //eslint-disable-line
// x = 0b1010;
// const y = 10;
let a: 100 = 100; //eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
pessoa.nome = 'Luiz';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

// Module mode
export default 1;
