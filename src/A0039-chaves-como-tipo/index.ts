type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
};

const carro: Car = {
  brand: 'Ford',
  year: '1980',
};

console.log(carro);
