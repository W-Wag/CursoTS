type MeuTipo = number;

const arrayNumbers: Array<number | string> = ['a', 2, 'b'];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

promiseAsync().then((resultado) => console.log(resultado + 1));

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

minhaPromise().then((resultado) => console.log(resultado + 1));
