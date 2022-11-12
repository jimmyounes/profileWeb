const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 3000;
var mustache = require('mustache-express');
var express = require('express');  
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index');
});
app.use('/images', express.static(__dirname +'/images'));  

app.listen(3000, () => console.log('listening on http://localhost:3000'));