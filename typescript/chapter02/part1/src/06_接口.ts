(function (){

  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number;
  };

  /* 
    接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
      同时接口也可以当成类型声明去使用
      接口中的所有的属性都不能有实际的值
      接口只定义对象的结构，而不考虑实际值
        接口中所有的方法都是抽象方法
  */
  interface myInterface{
    name: string;
    age: number;
  }

  interface myInter{
    name: string;

    sayHello():void;
  }

  // const odj: myInterface = {
  //   name: 'ss',
  //   age: 111
  // };

  /* 
    定义类，可以使类去实现一个接口，
    实现接口就是使类满足接口的要求
  */
  class MyClass implements myInter{
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('大家好');
    }

  }

})();