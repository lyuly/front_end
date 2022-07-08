// 该文件用于创建vuex中最为核心的store

// 引入vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
  jia(context, value) {
    // console.log('actions中的jia被调用了', context, value)
    context.commit('JIA', value)
  },
  minus(context, value) {
    context.commit('MINUS', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2)
      context.commit('JIA', value)
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  }
}

// 准备mutations——用于操作数据（state）
const mutations = {
  JIA(state, value){
    state.sum += value
  },
  MINUS(state, value) {
    state.sum -= value
  }
}

// 准备state——用于存储数据
const state = {
  sum: 0, // 当前的和
  school: '尚硅谷',
  subject: '前端',
  bigSum: 0
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})