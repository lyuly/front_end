<template>
  <div id="root" class="app">
		<h1>{{msg}}学生姓名：{{studentName}}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>
		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 第一种写法，使用@或v-on-->
		<Student @atguigu="getStudentName" @demo="m1"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 第二种写法，使用ref-->
		<!-- <Student ref="student"/> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {  },
  data() {
    return {
    
    }
  },
	watch: {
		
	},
	mounted () {
		// this.$refs.student.$on('atguigu',this.getStudentName)
		// 只触发一次
		// this.$refs.student.$once('atguigu',this.getStudentName)
	},
  methods: {
		getSchoolName(name){
			console.log('App收到了学校名', name)
		},
		getStudentName(name){
			console.log('App收到了学生名', name)
			this.studentName = name
		},
		m1() {
			console.log('demo事件被触发了')
		}
  }
}
</script>

<style>
	.app {
		padding: 5px;
	}
</style>
