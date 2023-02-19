function wait(t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}

wait(5000).then(() => { console.log('get called')})