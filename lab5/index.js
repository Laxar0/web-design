const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, ()=>{
  console.log('Port ${PORT}')
})