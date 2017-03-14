// set variables for environment
var express = require('express')
var app = express()
const PORT = 3000
var path = require('path')

// Set server port
console.log('server is running on ' + path + ' http://localhost:' + PORT)
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.listen(PORT)
