type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;
function meuFilter<T>(array: T[], callbackfn: FilterCallBack<T>) {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltradoOriginal);
console.log(arrayFiltrado);
