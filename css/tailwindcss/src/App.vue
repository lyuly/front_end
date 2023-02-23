<script setup lang='ts'>
import { ref } from 'vue';

const data = ref('')

const printData = () => {
}

const clearData = () => {
  data.value = ''
}

</script>

<template>
  <div>
    <div class="dark flex gap-4 justify-center items-center p-4 m-4">
      <button class="btn">默认</button>
      <button class="btn btn-primary">主要</button>
      <button class="btn btn-success">成功</button>
      <button class="btn btn-warning">警告</button>
      <button class="btn btn-info">信息</button>
      <button class="btn btn-danger">危险</button>
    </div>

    <div class="m-6 h-6">
      <form class="relative">
        <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" v-model="data"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute top-1/3 transform -translate-y-1/4 w-6 h-6 text-gray-400">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
        </svg>
      </form>

      <button class="btn btn-primary" @click="printData">确定</button>
    </div>
  </div>

</template>

<style scoped>

.pic {
  @apply w-16 md:w-32 lg:w-48;
}

.btn {
  @apply py-2 px-6 font-sans rounded-md shadow text-center antialiased hover:text-blue-500;
}

.btn-disable {
  @apply cursor-not-allowed;
}

.btn-primary {
  @apply text-white bg-blue-500 hover:bg-blue-700;
}

.btn-success {
  @apply text-white bg-green-500 hover:bg-green-700;
}

.btn-warning {
  @apply text-white bg-yellow-500 hover:bg-yellow-700;
}

.btn-info {
  @apply text-white bg-gray-500 hover:bg-gray-700;
}

.btn-danger {
  @apply text-white bg-red-500 hover:bg-red-700 rounded-full h-16 w-16;
}
</style>