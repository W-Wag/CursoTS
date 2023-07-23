// Metodo totalmente Permissivo

// const objetoA: Record<string, unknown> = {
//   chaveA: 'valor A',
//   chaveB: 'valor B',
// };

// Chaves Obrigatórias mas com uma certa permissividade

const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Nova chave';

// Não utilizar como tipo
// object
// {}
