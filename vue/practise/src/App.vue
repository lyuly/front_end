<script>
import { mixin } from './components/mixin'

export default {
  name: 'App',
  mixins: [mixin],
  data() {
    return {
      value: ''
    }
  },
  created() {

  },
  mounted() {

  },
  watch: {
    value: function(val, oldVal) {
      console.log(`new ${val} old ${oldVal}`)
    }
  },
  methods: {
    add(x) {
      console.log(x++)
    }
  },
}
</script>

<template>
  <div>
    <input type="text" :bind="value" v-on:change="value=$event.target.value">
    <br>
    <button @click="add">click</button>
    <br>
    <button @click="ok">---</button>
  </div>
</template>

<style>
</style>