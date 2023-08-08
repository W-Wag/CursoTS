export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  escrever() {
    if (this._ferramenta) {
      this._ferramenta.escrever();
    } else {
      console.log('Nenhuma ferramenta encontrada');
      return;
    }
  }
  get nome() {
    return this._nome;
  }
  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  get nome() {
    return this._nome;
  }
  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`Está escrevendo com ${this.nome}`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`Está digitando com ${this.nome}`);
  }
}

const escritor = new Escritor('Robert Deniro');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Panasonic');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.escrever();
