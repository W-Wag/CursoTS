function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Ana',
  idade: 29,

  exibirNome(): void {
    console.log(this.nome + ' ' + this.idade);
  },
};
export { pessoa };

semRetorno('one', 'two', 'three');
pessoa.exibirNome();
