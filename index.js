const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  configPath: 'string'
}

module.exports = function(source) {
  let options = loaderUtils.getOptions(this)
  validateOptions(schema, options, 'styleConfigLoader')
  let configPath = options.configPath
  let pathString = loaderUtils.stringifyRequest(this, configPath)
  let outString = `@import ${pathString};\n${source}`

  return outString
}
