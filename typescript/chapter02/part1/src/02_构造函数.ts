class Dog{
  name: string;
  age: number;

  // constructor是构造函数
  // 构造函数在对象创建时调用
  constructor(name: string, age: number) {
    // this表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    this.name = name;
    this.age = age;
  }

  bark() {
    alert('汪汪汪');
  }
}

const dog = new Dog('小黄', 1);
console.log(dog.name, dog.age);

const dog1 = new Dog('小黑', 2);
console.log(dog1.name, dog1.age);