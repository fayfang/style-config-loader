const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  configPath: 'string'
}

module.exports = function(source) {
  let options = loaderUtils.getOptions(this)
  // validate
  validateOptions(schema, options, 'styleConfigLoader')
  // getpath
  let configPath = options.configPath
  let pathString = loaderUtils.stringifyRequest(this, configPath)
  // output
  let outString = `@import ${pathString};\n${source}`

  return outString
}
