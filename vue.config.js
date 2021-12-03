'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      error: true
    },
    proxy: {
      '/': {
        target: 'http://dev.pmp.com.cn:19095',
        changeOrigin: true,
        ws: false
      }
    }
  },
  configureWebpack: {
    name: defaultSettings.title, // 网站标题
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
