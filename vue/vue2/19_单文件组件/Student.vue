<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName">点我提示姓名</button>
    
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等等）
export default {
  name:'Student',
  data() {
    return {
      studentName: '小张',
      age: 19
    }
  },
  methods: {
    showName() {
      alert(this.studentName)
    }
  }
}
</script>

<style>
  /* 组件的样式 */
  .demo {
    background-color: orange;
  }
</style>