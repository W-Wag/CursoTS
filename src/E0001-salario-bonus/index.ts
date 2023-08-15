// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

class Vendedor {
  constructor(
    private nome: string,
    private salario: number,
    private totalVendas: number,
  ) {}
  totalReceber() {
    this.totalVendas *= 0.15;
    const total = this.salario + this.totalVendas;
    console.log(total.toFixed(2));
  }
}

const vendedor = new Vendedor('Sergio', 500.0, 1230.3);
vendedor.totalReceber();
