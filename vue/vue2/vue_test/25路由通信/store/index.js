// 该文件用于创建vuex中最为核心的store

// 引入vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

// 求和相关的配置
const countOptions = {
  namespaced:true,
  actions:{
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
  },
  mutations:{
    JIA(state, value){
      state.sum += value
    },
    MINUS(state, value) {
      state.sum -= value
    }
  },
  state:{
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject: '前端',
    bigSum: 0,
  },
  getters:{}
}

// 人员管理相关的配置
const personOptions = {
  namespaced:true,
  actions:{},
  mutations:{
    ADD_PERSON(state, value) {
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[
      {id:'001', name:'张三'}
    ]
  },
  getters:{}
}

// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countOptions,
    personOptions
  },
  getters
})