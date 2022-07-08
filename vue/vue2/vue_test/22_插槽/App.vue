<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods">
      <img slot="center" src="https://cf.dtcj.com/da2ed518-bd9a-49b4-8fa4-106aafd6133f.jpg" alt="">
      <a slot="footer" href="http://bing.com">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://bing.com">单机游戏</a>
        <a href="http://google.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="https://www.youtube.com/watch?v=YxksUfnuEbI"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.google.com">经典</a>
          <a href="http://www.bing.com">  热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category> -->

    <Category title="美食">
      <template scope="atguigu">
          <ul>
            <li v-for="(food, index) in atguigu.foods" :key="index">{{food}}</li>
          </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name:'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>

<style scoped>
  .container, .foot{
    display: flex;
    justify-content: space-around;
  }

  h3{
    text-align: center;
    background-color: orange;
  }

  img {
    width: 100%;
  }
</style>