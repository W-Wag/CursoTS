type MapStringsCallBack = (item: string) => string;

export function mapStrings(array: string[], callback: MapStringsCallBack): string[] {
  const newArray: string[] = [];
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    newArray.push(callback(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);
