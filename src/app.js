const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const publicPath = path.resolve(__dirname,'../public');

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(mainRoutes);


app.listen(3000, () =>{
  console.log('Arrancando servidor...');
  console.log("http://localhost:3000");
});


