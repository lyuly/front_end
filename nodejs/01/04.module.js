a = 10;

/* 
  在node中有一个全局对象 global，它的作用和网页中window类似
    在全局中创建的变量都会作为global的属性保存
    在全局中创建的函数都会作为global的方法保存

    当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
        function (exports, require, module, __filename, __dirname) {

        }

      实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参
        exports
          - 该对象用来将变量或函数暴露到外部
        
        require
          - 函数，用来引入外部的模块
        
        module
          - module代表的就是当前模块本身
          - exports就是module的属性
          - 既可以使用exports，也可以使用module.exports
      
    exports 和 module.exports
        - 通过exports只能使用.的方式来向外暴露内部变量
          exports.xxx = xxx
        
        - 而module.exports既可以通过.的形式，也可以直接赋值
            module.exports.xxx = xxx
            module.exports = {}
*/

// console.log(global.a);

/* 
  arguments.callee 这个属性保存的是当前执行的函数对象
*/

console.log(arguments.callee + "");