var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('M is the best girlfriend in the world!')
})
 
app.listen(3000)
console.log("Server listening on 3000");
