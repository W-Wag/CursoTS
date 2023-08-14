// Encadeamento opcional e Operador de coalescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
};

// Vai executar o código após a coalescência nula
console.log(documento.data?.toDateString() ?? 'Ixi, não tem data não meu parceiro.');
console.log(undefined ?? 'Ixi, não tem data não meu parceiro.');
console.log(null ?? 'Ixi, não tem data não meu parceiro.');

// Vai mostrar o valor
console.log(0 ?? 'Ixi, não tem data não meu parceiro.');
console.log(false ?? 'Ixi, não tem data não meu parceiro.');
