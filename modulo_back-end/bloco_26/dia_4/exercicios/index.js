const express = require('express');
const app = express();
// const bodyParser = require('body-parser');


// app.use(bodyParser.json()); // lib necessária para acessar body recebido em testes pelo Postman.
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({message: 'pong'});
});

app.post('/hello', (req, res) => {
  const {body} = req;
  const name = body.name;
  const idade = body.age;

  if (idade > 17) {
    res.status(200).send({message: `Hello, ${name}`});
  } else {
    res.status(401).send({message: "Unauthorized"});
  } 
});

app.put('/users/:name/:age', (req, res) => {
  const {params} = req;
  const name = params.name;
  const idade = params.age;
  res.send({message: `Seu nome é ${name} e você tem ${idade} anos de idade.`})
});

app.listen(3000, () => {
  console.log('servidor rodando');
});
