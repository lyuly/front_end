# 笔记

## 脚手架文件结构:

## 关于不通过版本的Vue:

## vue.config.js配置文件

## ref属性

## 配置项props

## mixin(混入)
    功能：可以把多个组件共用的配置提取出一个混入对象
    使用方式：
        第一步 定义混合，例如：
            {
              data(){...},
              methods:{...}
              ...
            }
        第二步 使用混入，例如：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins:['xxx']

## 插件
    功能： 用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install = function (Vue, options) {
            // 1. 添加全局过滤器
            Vue.filter(....)
    
            // 2. 添加全局指令
            Vue.directive(....)
    
            // 3. 配置全局混入(合)
            Vue.mixin(....)
    
            // 4. 添加实例方法
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxxx
        }
    使用插件：Vue.use()

## scoped样式
    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>

## 总结TodoList案例

1.组件化编码流程：

​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

​			1).一个组件在用：放在组件自身即可。

​			2).一些组件在用：放在他们共同的父组件上（==状态提升==）

​	(3).实现交互：从绑定事件开始。

2.props适用于：

​	(1).父组件 ==> 子组件 通信

​	(2).子组件 ==> 父组件 通信 （要去父先给子一个函数）

3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 组件的自定义事件
1.一种组件间通信的方式，适用于：子组件 ===> 父组件
2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要把在A中给B绑定自定义事件（事件的回调在A中）。
3.绑定自定义事件：
    1.第一种方式，在父组件中：`<Demo @atguigu="test"/>` 或 `<Demo v-on:atguigu="test"/>`
    2.第二种方式，在父组件中：
    ```
        <Demo ref="demo"/>
        .....
        mounted() {
            this.$refs.xxx.$on('atguigu', this.test)
        }
    ```
    3.若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。
4.触发自定义事件：`this.$emit('atguigu',数据)`
5.解绑自定义事件`this.$off('atguigu')`
6.组件上也可以绑定原生DOM事件，需要使用`native`修饰符。
7.注意：通过`this.$refs.xxx$on('atguigu', 回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

## 全局事件总线（GlobalEventBus）
1.一种组件间通信的方式，适用于`任意组件间通信`。

2.安装全局事件总线：

```vue
new Vue({
  ......
  beforeCreate() {
  	Vue.prototype.$bus = this	// 安装全局事件总线，$bus就是当前应用的vm
	},
  ......
})
```

3.使用事件总线：

​	1.接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的`回调留在A组件自身。`

```vue
methods(){
  demo(data){......}
}
......
mounted(){
  this.$bus.$on('xxxx',this.demo)
}
```

​	2.提供数据：`this.$bus.$emit('xxxx',数据)`

4.最好在beforeDestroy钩子中，用$off去解绑`当前组件所用到的`事件。



## 消息订阅与发布（pubsub）

1.一种组件间通信的方式，适用于`任意组件间通信`。

2.使用步骤：

​	1.安装pubsub：`npm i pubsub-js` 或 `yarn add pubsub-js`

​	2.引入：`import pubsub from 'pubsub-js'`

​	3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的`回调留在A组件自身`。

```vue
methods(){
	demo(data){......}
}
......
mounted(){
	this.pid = pubsub.subscribe('xxx', this.demo) // 订阅消息
}
```

​	4.提供数据：`pubsub.publish('xxx',数据)`

​	5.最好在beforeDestory钩子中，用`PubSub.unsubscribe(pid)`去<span style='color:red'>取消订阅。</span>

## nextTick

1.语法：`this.$nextTick(回调函数)`

2.作用：在下一次DOM更新结束后执行其指定的回调。

3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue动画

写法：

1.准备好样式：

  * 元素进入的样式：

    ​	1.v-enter：进入的起点

    ​	2.v-enter-active：进度过程中

    ​	3.v-enter-to：进入的终点

  * 元素离开的样式：

    ​	1.v-leave：离开的起点

    ​	2.v-leave-active：离开过程中

    ​	3.v-leave-to：离开的终点

2.使用`<transition>`包裹要过渡的元素，并配置name属性：

```html
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```

3.备注：若有多个元素需要过渡，则需要使用：`<transition-group>`，且每个元素都要指定`key`值

## 插槽

1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于<span style="color:red">父组件===>子组件</span>

2.分类：默认插槽、具名插槽、作用域插槽

3.使用方式：

（1）默认插槽

```vue
父组件中：
	<Category>
    <div>
      html结构1
    </div>
子组件中：
    <template>
    	<div>
        <!-- 定义插槽 -->
        <slot>插槽默认内容...</slot>
      </div>
    </template>
```

(2).具名插槽

```vue
父组件中：
	<Category>
    <template slot="center">
    	<div>
        html结构1
      </div>
    </template>
    
    <template v-slot:footer>
			<div>
        html结构
      </div>
    </template>
	</Category>

子组件中：
	<template>
		<div>
      <!-- 定义插槽 -->
      <slot name="center">插槽默认内容...</slot>
      <slot name="footer">插槽默认内容</slot>
    </div>
	</template>
```

3.作用域插槽：

（1）理解：<span style="color:red">数据在组件的自身，但根据数据生成的结果需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

（2）具体编码

```vue
父组件中：
<Category>
  <template scope="scopeData">
  	<!-- 生成的是ul列表 -->
		<ul>
      <li v-for="g in scopeData.games" :key="g">{{g}}</li>
    </ul>
  </template>
</Category>

子组件中：
<template>
	<div>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
  //数据在子组件自身
  data() {
    return {
      games:['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
    }
  }
}
</script>
```

