/* class 定义一个类
  对象中主要包含两个部分：
    属性
    方法
*/
class Person {

  /* 
    直接定义的属性是实例属性，需要通过对象的实例对访问：
      const per = new Person();
      per.name

    使用static开头的属性是静态属性（类属性），可以直接通过类去访问
      Person.age
    
    readonly开头的属性表示一个只读的属性无法修改
  */

  // 定义实例属性
  // readonly name: string = '小红';
  name:string = '猪八戒';

  // 在属性前使用static关键字可以定义类属性（静态属性）
  // static readonly age: number = 18;
  age: number = 19;

  // 定义方法
  /* 
    如果方法以static开头则方法就是类方法，可以直接通过类去调用
  */
  sayHello() {
    console.log('hello,大家好');
  }
}

const per = new Person();

// console.log(per);

// console.log(Person.age);

// console.log(per.name);
// per.name = 'tom';
// console.log(per.name);

// Person.sayHello();
per.sayHello();
