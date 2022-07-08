"use strict";
(function () {
    /*
        以abstract开头的类是抽象类，
            抽象类和其他类区别不大，只是不能用来创建对象
            抽象列就是专门用来被继承的类
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            // 在类的方法中 super表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪！');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵！');
        }
    }
    const dog = new Dog('小黄');
    dog.sayHello();
})();
