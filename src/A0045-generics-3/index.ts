interface PersonProtocol<T, U> {
  name: T;
  lastname: T;
  age: U;
}
type PersonProtocol2<T, U> = {
  name: T;
  lastname: T;
  age: U;
};

const student: PersonProtocol<string, number> = {
  name: 'Noah',
  lastname: 'McDonalds',
  age: 26,
};

const student2: PersonProtocol2<number, number> = {
  name: 123,
  lastname: 456,
  age: 26,
};

console.log(student, student2);
