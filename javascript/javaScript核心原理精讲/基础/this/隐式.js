let girl = {
  name: 'dani',
  height: 160,
  weight: 90,
  detail: function() {
    console.log('name', this.name)
    console.log('high', this.height)
    console.log('weight', this.weight)
  }
}

girl.detail()