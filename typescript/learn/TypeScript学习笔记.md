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

#### 展开运算符

```typescript
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]
```



## 接口

### 接口初探

接口的定义

```typescript
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

### 可选属性

用`?`表示可选

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({color: 'black'});
console.log(mySquare);
```

### 只读属性

加上`readonly`即可

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 10};
p1.x = 5; // Cannot assign to 'x' because it is a read-only property

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error
ro.push(5); // error
ro.length = 100; // error
a = ro; // error

a = ro as number[]; // correct，用类型断言as修改属性
```

### 额外的属性检查

可以使用类型断言`as`，也能使用索引签名

```typescript
interface Person {
  name?: string;
  age?: number;
}

function fn(config: Person): {name: string, age: number} {
  let newP = {name: 'pig', age: 1};
  if (config.name) {
    newP.name = config.name;
  }

  if (config.age) {
    newP.age = config.age;
  }

  return newP;
}

let p = fn({name: 'fff', age: 18} as Person);
console.log(p);
```

### 函数类型

在`interface`里定义

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// boolean类型
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

interface AddFunc {
  (a: number, b: number): number;
}

// number类型
const sum: AddFunc = (a: number, b: number) => {
  return a + b;
}

console.log(sum(1, 2));
```

### 可索引的类型

```typescript
// 用number去索引StringArray时返回的是string类型的返回值
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
```

### 继承接口

从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里

一个接口可以继承多个接口，创建出多个接口的合成接口。

```typescript
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
```



## 类

### 类

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());
```

### 继承

使用继承来扩展现有的类

Dog是一个派生类（子类），Animal是一个基类（超类）

```typescript
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

### 公共私有受保护修饰符

`public` 指定成员是可见的

```typescript
class Animal {
  public name: string;
  
  public constructor(theName: string) {
    this.name = theName;
  }
  
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

`private` 指定成员在类外部不可见，继承的也是私有的

```typescript
class School {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

`protected` 在派生类中仍然可以访问，构造函数被标记为`protected`，不能在类外部访问，但是可以被继承

```typescript
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("howard", 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name);
```

**readonly**修饰符表明属性是只读的

### 存取器

通过getters/setters来读取成员

```typescript
class School {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
    
}
```

### 静态属性

使用`类名.`来访问属性

### 抽象类

抽象类作为其它派生类的基类使用。



## 函数

### 函数类型

参数类型和返回值类型

```typescript
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
}
```

**推断类型**

在赋值语句的一边指定了类型但是另一边没有类型的话，ts会自动识别出类型

```typescript
let myAdd = function(x: number, y: number): number {
  return x + y;
}

let myAdd: (x: number, y: number) => number =
    function(x, y) {
      return x + y;
    }
```

### 可选参数

`?`可选

```typescript
function buildName(firstName: string, lastName?: string): string {
  return firstName + ' ' + lastName;
}

let name = buildName('Bob');
```

### 重载

参数名相同，类型不同

```typescript
#!/usr/bin/env bun

function Person(p: {name: string, age: number}[]): number;
function Person(name: string, age: number);
function Person(p): any {
  if (typeof p === 'object') {
    let ans = Math.floor(Math.random() * p.age);
    return ans;
  }

  else if (typeof p === 'number') {
    let ans = Math.floor(p / 13);
    return { p: ans, age: p};
  }
}
```



## 泛型

### 泛型hello world

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let str = identity('Hello, World!'); // 自动推断类型
console.log(str);
```

### 使用泛型

```typescript
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

const arr = loggingIdentity([1, 2, 3, 4, 5]);
console.log(`arr: ${arr}`);
```

泛型类型

```typescript
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

// 泛型接口
interface Info<T> {
  (arg: T): T;
}

function build<T>(age: T): T {
  return age;
}

let myAge: Info<number> = build;
console.log(myAge(10));
```

### 泛型类

直接在类名后面加泛型即可

```typescript
class Calculator<T> {
  initValue: T;
  add: (x: T, y: T) => T;
}

let calculator = new Calculator<number>();
calculator.initValue = 0;
calculator.add = function(a, b) {
  return a + b;
}

console.log(calculator.add(1, 2));
```

**泛型约束中使用类型函数**

```typescript
function getProperty(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));
```

**泛型中使用类类型**



## 枚举

### 数字枚举

`Up`是1，`Down`是2，`Left`是3，`Right`是4

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}
```

### 字符串枚举

```typescript
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

console.log(Direction.Up);
```

### 异构枚举

混合数字和字符

```typescript
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}
```

### 外部枚举

```typescript
declare enum Enum {
  A = 1,
  B,
  C = 2
}
```

