# TypeScript学习笔记

## 基础类型

### 布尔值

true/false

```typescript
let flag: boolean = false;
```

### 数字

所有的数字都是浮点数，除了支持十进制和十六进制，而且还支持二进制和八进制

```typescript
let a: number = 1;
let b: number = 1.1;
let c: number = 0x1111;
let d: number = 0o733;
```

### 字符串

用单引号或者双引号括起来表示字符串，也可以使用模板字符串

```typescript
let s: string = 'Hello, TypeScript☺️';
let str: string = `Welcome to Changchun, jluer📚`;
```

### 数组

和JavaScript类似，定义有两种方式

1. 元素类型后加上`[]`

```typescript
let arr: number[] = [1, 2, 3];
```

2. 使用数组泛型，`Array<元素类型>`

```typescript
let arr: Array<number> = [1, 2, 3];
```

### 元组

表示一个已知元素和类型的数组，各元素的类型不必相同

```typescript
let x: [string, number];
x = ['hello', 10];
```

### 枚举

`enum`类型，默认情况下，元素从0开始编号，当然你可以自己设置值，比如从1开始编号

```typescript
enum Color {Red, Gree, Blue}
let c: Color = Color.Green;
console.log(c); // 1

enum Word {A = 1, B, C}
let wordName: string = Word[2];
console.log(Word[3]); // C
```

### Any

任意属性，当不清楚变量的属性时，可以将变量设置为任意属性

```typescript
let a: any = 4;
a = 'My god';
a = [1, 2, 3];
a = false;
```

### Void

没有任何类型，如果是函数的话，那就是没有返回值

```typescript
function fn(): void {
  console.log('Hi, Nice to meet you');
}

console.log(fn()); // Hi, Nice to meet you
```

### Null和Undefined

null和undefined有各自的类型null和undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

### Never

表示永不存在的值的类型

* 返回的never函数必须存在无法到达的终点
* 推断的返回值类型为never
* 返回的never函数必须存在无法到达的终点

```typescript
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {
  }
}
```

### Object

非原始类型

```typescript
interface Person {
  name: string;
  age: number;
  sex?: string;
}

const obj: Person = {
  name: 'nnn',
  age: 18
}

console.log(obj.name);
console.log(obj['name']);
```

### 类型断言

TypeScript允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制叫类型断言，可以用尖括号`<>`或`as`

```typescript
let someOne: any = "this is a wonderful thing";
let someLength: number = (someOne as string).length;
console.log(someLength);
```



## 变量声明

### var声明

```typescript
var a: number = 10;
```

### let声明

#### 块级作用域

必须先声明后使用

```typescript
function f(input: boolean) {
  let a: number = 100;

  if (input) {
    let b: number = a + 1;
    return b;
  }

  return b; // 未定义
}
```

### const声明

被赋值后无法修改，有暂时性死区

```typescript
const numLivesForCat = 9;
const kitty = {
  name: 'Aurora',
  numLives: numLivesForCat,
}

// kitty = {
//   name: 'Danielle',
//   numLives: numLivesForCat
// };
// error

kitty.name = 'Rory';
kitty.name = 'kitty';
kitty.name = 'Cat';
kitty.numLives--;
```

### 解构

#### 解构数组

```typescript
let input: number[] = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);
```

#### 对象解构

```typescript
let obj = {
  a: 'foo',
  b: 12,
  c: 'bar'
};

let { b, c } = obj;
console.log(b);
console.log(c);
```

#### 属性重命名

```typescript
let { b: newName1, c: newName2 } = obj;
console.log(newName1);
console.log(newName2);
```





