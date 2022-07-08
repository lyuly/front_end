"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写构造函数，在子类构造函数中必须使用super调用父类
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中 super表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪！');
        }
    }
    const dog = new Dog('小黄', 1);
    dog.sayHello();
})();
