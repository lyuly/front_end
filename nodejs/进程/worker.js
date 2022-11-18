(function test(x) {
  console.log(x++)
  test(x)
})(0)