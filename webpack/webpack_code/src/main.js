// 完整引入
// import 'core-js';
// 按需加载
import 'core-js/es/promise';

import count from "./js/count";
import sum from './js/sum';
//import { mul } from './js/math';
// 想要webpack打包，必须引入
import './css/iconfont.css';
import './css/index.css';
import './less/index.less';
import './sass/index.sass';
import './sass/index.scss';
import './stylus/index.styl';

// console.log(mul(3, 3));
console.log(count(4, 2));
console.log(sum(1, 2, 3, 4));

document.getElementById('btn').onclick = function() {
  // /* webpackChunkName: "math" */ webpack模块命名
  import(/* webpackChunkName: "math" */ './js/math').then(({mul}) => {
    console.log(mul(2,3));
  }).catch((err) => {
    console.log(err);
  });
};

if (module.hot) {
  // 判断是否支持热模块替换功能
  module.hot.accept('./js/count');
  module.hot.accept('./js/sum');
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const arr = [1, 2, 3, 4];
console.log(arr.includes(1));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}