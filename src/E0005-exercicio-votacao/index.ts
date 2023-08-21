type EscolhaLinguagem = 'Python' | 'Javascript' | 'Typescript';

class LinguagemFavorita {
  private votacao = {
    javascript: 0,
    python: 0,
    typescript: 0,
  };

  escolhaSuaLinguagem(escolha: EscolhaLinguagem) {
    if (escolha === 'Python') {
      this.votacao.python++;
      console.log(this.votacao);
    }
    if (escolha === 'Javascript') {
      this.votacao.javascript++;
      console.log(this.votacao);
    }
    if (escolha === 'Typescript') {
      this.votacao.typescript++;
      console.log(this.votacao);
    }
  }
}

const linguagemFavorita = new LinguagemFavorita();
linguagemFavorita.escolhaSuaLinguagem('Javascript');
linguagemFavorita.escolhaSuaLinguagem('Javascript');
