// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;
// Pick
type PessoaPick = Pick<PessoaReadonly, 'nome' | 'sobrenome'>;

const objeto2: PessoaPick = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  // idade: 30,
};
console.log(objeto2);

// Extract e Exclude
// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TipoExclude = Exclude<ABC, CDE>;
// type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'asdsasd02-asdsad123dsa412s21s',
  name: 'Sei',
  age: 95,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
