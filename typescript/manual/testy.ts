import { randomArray } from "./src/random/randomArray";
import { bubbleImp } from "./src/sort/bubbleSort/bubbleImp";
import { bubbleSort } from "./src/sort/bubbleSort/bubbleSort";
import { selectSort } from "./src/sort/selectSort/selectSort";

const N = 10;

console.time("bubbleSort");
const arr = randomArray(N);
console.log(`开始前:${arr}`);
bubbleSort(arr);
console.log(`排序后:${arr}`);
console.timeEnd("bubbleSort");

console.log("\n");

console.time("bubbleImp");
const arr1 = randomArray(N);
console.log(`开始前:${arr1}`);
bubbleImp(arr1);
console.log(`排序后:${arr1}`);
console.timeEnd("bubbleImp");

console.log("\n");

console.time("selectSort");
const arr2 = randomArray(N);
console.log(`开始前:${arr2}`);
selectSort(arr2);
console.log(`排序后:${arr2}`);
console.timeEnd("selectSort");
