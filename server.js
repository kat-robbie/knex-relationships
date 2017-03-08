var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index.js')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/', index.get)
server.get('/profile/:id', index.showProfile)
server.get('/form', index.showForm)

server.post('/form', index.createUser)
