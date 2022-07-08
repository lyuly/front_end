<script setup>
import { ref } from 'vue';

const count = ref(0);

const add = () => {
  count.value++;
}
</script>

<template>
  <div>
    <p @click="add">{{count}}-点我加一</p>
  </div>
</template>

<style>

</style>