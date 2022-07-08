/* 
  Buffer(缓冲区)
    - Buffer的结构和数组很像，操作的方式和数组类似
    - 数组中不能存储二进制文件，而buffer就是专门用来存储二进制数据
    - 使用buffer不需要引入模块，直接使用即可
    - 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
        buffer 中每一个元素的范围都是从00 - ff 0 - 255
        00000000 - 11111111

        8bit = 1byte(字节)
*/

var str = 'Hello Atguigu';

// 将字符串保存到buffer中
// var buf = Buffer.from(str);

// console.log(buf);

var buf2 = Buffer.alloc(10);
buf2[9] = 0xac;
console.log(buf2);