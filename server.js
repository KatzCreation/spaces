var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Johhny Is a poo face')
})
 
app.listen(3000)
