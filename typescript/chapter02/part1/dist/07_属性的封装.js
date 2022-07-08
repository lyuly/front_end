"use strict";
(function () {
    let Gender;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(Gender || (Gender = {}));
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        getGender() {
            return this.gender;
        }
        setGender(g) {
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
