// set variables for environment
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const PORT = 3000
var path = require('path')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var router = express.Router()

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' })
})

app.use('/api', router)
// acts as request handler
// does logging as well, express is crazy
//
// Set server port
console.log('server is running on ' + path + ' http://localhost:' + PORT)
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.listen(PORT)

