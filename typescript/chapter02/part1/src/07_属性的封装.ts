(function () {

  enum Gender {
    Male = 0,
    Female = 1
  }

  class Person {

    /* 
      public 修饰的属性可以在任意位置访问（修改）默认值
      private 私有属性，只能在类内部访问（修改）
          - 通过在类中添加方法使得私有属性可以被外部访问
      
          protected 受保护的属性，只能在当前类和当前类的子部中访问
    */

    public name: string;
    public age: number;
    private gender: Gender;

    constructor(name: string, age: number, gender: Gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    getGender() {
      return this.gender;
    }

    setGender(g: number) {
      if (g === 0 || g === 1)
        this.gender = g;
      else
      throw new Error('出错啦！');
    }
  }

  const p = new Person('小明', 9, 0);

  p.name = '小红';
  p.age = 10;

  console.log(p);

  p.setGender(9);

  console.log(p);
  
})();