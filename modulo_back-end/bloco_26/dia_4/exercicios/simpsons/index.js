const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const app = express();

const readJSONFile = async() => {
  const personagens = await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'));
  return JSON.parse(personagens.toString('utf-8'));
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send('Ocorreu algum erro no processo!');
}
app.use(express.json());

app.get('/simpsons', async(req, res) => {
  const lista = await readJSONFile();
  res.status(200).send(lista)
});

app.get('/simpsons/:id', async(req, res) => {
  const { params } = req;
  const idPersonagem = params.id;
  const lista = await readJSONFile();
  const personagem = lista.find(({id}) => id === idPersonagem)
  if (personagem !== undefined) {
    res.status(200).send(personagem)
  } else {
    res.send([])
  }
});

// app.post('/simpsons')

app.use(errorHandler);

app.listen(3000, () => {
  console.log('servidor rodando');
});