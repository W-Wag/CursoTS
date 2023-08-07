export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    if (this.vida < 0) return this.perdeu(this);
    if (personagem.vida < 0) {
      return this.perdeu(personagem);
    }
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(dano: number): void {
    this.vida -= dano;
    const vidaRestante = this.vida < 0 ? '' : `${this.vida} restante`;
    console.log(`${this.nome} perdeu ${dano} de vida! ${vidaRestante}`);
  }

  perdeu(personagem: Personagem): void {
    console.log(`${personagem.nome} foi derrotado!`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '👑';
  bordao(): void {
    console.log(this.emoji + '- Lamina afiada');
  }
}
export class Monstro extends Personagem {
  protected emoji = '👻';
  bordao(): void {
    console.log(this.emoji + '- Tome!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
