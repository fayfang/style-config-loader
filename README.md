# style-config-loader
小工具，用于在stylus、less、sass等css预处理
语言前插入公共的代码，以减少代码中不断import某个文件

## install
``` node
  npm install style-config-loader --save-dev
```

## example
webpack.config.js
``` javascript
const path = require('path')

module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'css-loader',
          'stylus-loader',
          {
            loader: 'style-config-loader',
            options: {
              configPath: path.resolve('./src/style/config.styl')
            }
          }
        ]
      }
    ]
  }
}
```
