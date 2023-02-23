function sleep(wait) {
  return new Promise(resolve => {
    setTimeout(resolve, wait)
  })
}

async function hello() {
  console.log('pre async')
  await sleep(5000)
  console.log('hello!')
}

hello()