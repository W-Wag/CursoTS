/* eslint-disable @typescript-eslint/no-namespace */
namespace Modules {
  export const nomeDoNs = 'Luiz';

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNs = new PessoaDoNamespace('Luiz');
  console.log(pessoaDoNs);
}

console.log(Modules.nomeDoNs);
