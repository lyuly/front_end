<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <!-- <button @click="showName">点我提示学校名</button> -->
    
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等等）
// import { hunhe } from '../mixin'

export default {
  name:'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京昌平'
    }
  },
  // mixins:[hunhe]
}
</script>

<style scoped>
  /* 组件的样式 */
  .school {
    background-color: gray;
  }
</style>