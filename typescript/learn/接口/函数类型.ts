interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

interface AddFunc {
  (a: number, b: number): number;
}

const sum: AddFunc = (a: number, b: number) => {
  return a + b;
}

console.log(sum(1, 2));