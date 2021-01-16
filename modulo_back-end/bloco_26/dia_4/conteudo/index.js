const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(1, new Date());
  next()
})

app.use((req, res, next) => {
  // console.log(2, req.method)
  // next()
  // token invalido:
  res.status(401).send({message: 'Token Invalido'})
})

app.get('/', function (req, res) { 
  res.send('Hello World');
})

app.listen(3000, function() {
  console.log('Ouvindo a porta 3000')
})