var mixin = {
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    console.log('mixin开始啦')
  },
  methods: {
    ok() {
      console.log(this.a--)
    }
  }
}

export { mixin }