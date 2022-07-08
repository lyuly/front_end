// 引入Vue
import Vue from 'vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 引入store
import store from './store/index'

// 引入插件
// import plugins from './plugins'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 插件使用
// Vue.use(plugins)

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
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')