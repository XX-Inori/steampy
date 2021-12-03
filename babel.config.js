const plugins = []
plugins.push('@vue/babel-plugin-transform-vue-jsx')
//  按需引入ant
plugins.push(['import',
  {
    'libraryName': 'vant',
    'libraryDirectory': 'es',
    'style': true
  }])
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
module.exports = {
  plugins,
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
