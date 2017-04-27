const express = require('express')
const compression = require('compression')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(compression())

  server.get('/resume', (req, res) => {
    return app.render(req, res, '/resume', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).listen(process.env.PORT || 5000)
