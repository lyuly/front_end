const PLUGIN_NAME = "FooPlugin"

class FooPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      const logger = compilation.getLogger(PLUGIN_NAME)
      logger.log("Logging from FooPlugin")
      logger.error("Error from FooPlugin")
    })
  }
}

module.exports = FooPlugin