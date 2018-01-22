(function () {
  'use strict'

  // modules
  let express = require('express')
  let app = express()
  let server = require('http').Server(app)
  let routes = require('./app/routes/routes.js')
  let bodyParser = require('body-parser')

  // Start the server to listen for incoming requests on port 9090.
  server.listen(9090)

  app.use(bodyParser.json())

  // Static files in the public folder
  const path = require('path')
  app.use(express.static(path.join(__dirname, '/client')))

  // Wire up the router.
  app.use('/', routes)

    // Create the app module
  module.exports = app
}())
