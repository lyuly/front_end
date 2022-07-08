// 引入Vue
import Vue from 'vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'
import {hunhe, hunhe2} from './mixin'

// 关闭vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)

/* 
  关于不同版本的Vue:

    1.vue.js与vue.runtime.xxx.js的区别:
      (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
      (2).vue.runtime.xxx.js是运行版的Vue，

*/

// 创建Vue实例对象---vm
new Vue({
  // 下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: h => h(App),
}).$mount('#app')