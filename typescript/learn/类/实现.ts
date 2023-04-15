export interface PersonType {
  name: string;
  age: number;
  getName: () => string;
  getAge: () => number;
  setName: (value: string) => void;
  setAge: (value: number) => void;
}

class Person implements PersonType {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name
  }

  setName(value: string) {
    this.name = value
  }

  getAge() {
    return this.age
  }

  setAge(value: number) {
    this.age = value
  }
}

const p = new Person('pig', 18);
console.log(p.getAge());
console.log(p.getName());

type MyPick<T, K extends keyof T> = {[key in K]: T[key]};

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};