import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// 创建虚拟节点
var myVnode1 = h('a', {
    props: { 
      href: 'https://www.baidu.com',
      target: '_blank'
    }}, '尚硅谷');
console.log(myVnode1);

// 让虚拟节点上树
const container = document.getElementById('container');
patch(container, myVnode1);