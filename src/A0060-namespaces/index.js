/* eslint-disable @typescript-eslint/no-namespace */
var Modules;
(function (Modules) {
    Modules.nomeDoNs = 'Luiz';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    var pessoaDoNs = new PessoaDoNamespace('Luiz');
    console.log(pessoaDoNs);
})(Modules || (Modules = {}));
console.log(Modules.nomeDoNs);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
console.log(Modules.nomeDoNs);
