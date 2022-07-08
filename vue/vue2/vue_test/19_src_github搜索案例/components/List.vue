<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name:'List',
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        users: []
      }
    }
  },
  mounted () {
    this.$bus.$on('updateListData', (dataObj) => {
      // console.log('我是List组件，收到数据', users)
      this.info = dataObj
    })
  },
  beforeDestroy() {
    this.$bus.$off('updateListData')
  }
}
</script>

<style scoped>
  
</style>