/* eslint-disable no-console, consistent-return */
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(hotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, 'localhost', (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Server listening @ http://localhost:3000')
})
