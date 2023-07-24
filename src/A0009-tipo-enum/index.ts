enum Cores {
  VERMELHO = 32,
  AMARELO = 555,
  VERDE = 444,
  AZUL = 123,
  LARANJA = 12,
}

enum Cores {
  ROXO = 122,
  ROSA = 5555,
}

console.log(Cores);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(12);
