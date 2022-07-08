<template>
  <div>
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'

export default {
  naem: 'App',
  components: {
    Search, List
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  
</style>