<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    
  </div>
</template>

<script>
// import { hunhe, hunhe2 } from '../mixin'
  // 组件交互相关的代码（数据、方法等等）
export default {
  name:'Student',
  // props:['name', 'age', 'sex'],
  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
    sex:String
  }, */
  // 接收的同时对数据：进行类型限制 + 默认值指定 + 必要性限制
 /*  props: {
    name: {
      type: String, // name的类字那个是字符串
      required: true // name是必要的
    },
    age: {
      type: Number,
      default: 99 // 默认值
    },
    sex: {
      type: String,
      required: true
    }
  }, */
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
  // mixins: [hunhe, hunhe2]
  // methods: {
    /* updateAge() {
      this.myAge++
    } */
  // }
}
</script>

<style scoped>
  /* 组件的样式 */
  .student {
    background-color: azure;
  }
</style>