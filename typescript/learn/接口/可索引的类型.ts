interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

interface NumberArr {
  [index: number]: number;
}

let arr2: NumberArr = [1, 2, 3, 4, 5];
console.log(arr2[1]);

/* class Animal {
  name: string;
}

class Dog extends Animal {
  bread: string;
}

interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
} */

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArr: ReadonlyStringArray = ["Alice", 'Bob'];
// myArr[2] = "Mallory";