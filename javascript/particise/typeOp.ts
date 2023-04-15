// 从类型T中选取键为K中指定的属性
type MyPick<T, K extends keyof T> = { [k in K]: T[k] };

// 从类型T中排除与U中相同的属性
type MyExclude<T, U> = T extends U ? never : T;

// 从T中排除指定的类型
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

type Person = {
  name: string;
  age: number;
  address: string;
};

type NameAndAge = MyPick<Person, 'name' | 'age'>;

const p: NameAndAge = {
  name: 'pig',
  age: 19
}

type Test = MyExclude<number | string, number>;

const a: Test = '1';

const b: MyOmit<Person, 'name' | 'age'> = { address: 'No.1' };