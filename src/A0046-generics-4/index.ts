type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'branca',
  vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);
