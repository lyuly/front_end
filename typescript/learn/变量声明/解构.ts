let input: number[] = [1, 2];
let [firstX, secondX] = input;
console.log(firstX);
console.log(secondX);

function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second);
}

// f(input);

let [third, ... rest] = [1, 2, 3, 4];
console.log(third);
console.log(rest);

let obj = {
  a: 'foo',
  b: 12,
  c: 'bar'
};

// 属性重命名
let { b: newName1, c: newName2 } = obj;
console.log(newName1);
console.log(newName2);

function keepWholeObject(wholeObject: { a: string, b?: number}) {
  let { a, b = 1001 } = wholeObject;
}