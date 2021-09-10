/**
 * Module dependencies.
 */
const express = require('express')
const open = require('open')
const { createProxyMiddleware } = require('http-proxy-middleware')

/**
 * Configure proxy middleware
 */
const devProxy = createProxyMiddleware({
  // target: 'https://192.168.241.103:8443',
  target: 'https://192.168.202.206:8443',
  // target: 'http://jsonplaceholder.typicode.com',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  secure: false,
})

const app = express()

/**
 * Add the proxy to express
 */
app.use('/dm', devProxy)

app.listen(3000)

console.log('[DEMO] Server: listening on port 3000')
