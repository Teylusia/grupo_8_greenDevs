const express = require('express')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname,'public')
app.use( express.static(publicPath))

app.listen(3000, () =>{
  console.log('Arrancando servidor...')
})
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/pro', (req, res)=>{
  res.sendFile(__dirname + '/views/productCart.html')
})