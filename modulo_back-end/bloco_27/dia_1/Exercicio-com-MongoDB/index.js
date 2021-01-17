const express = require('express');
const server = express();

const User = require('./models/User');

server.use(express.json());

server.get('/user', async (req, res) => {
  const users = await User.getUsers();

  return res.status(200).json(users);
});

server.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const searchedId = Number(id);

  const user = await User.findById(searchedId);

  return res.status(200).json(user);
});

server.post('/user', async (req, res) => {
  const { id, first_name, last_name, email, password } = req.body;

  const validated = await User.validate(id, first_name, last_name, email, password);
  if(!validated) {
    return res.status(200).send({message: 'Dados Inválidos'});
  }

  await User.createUser(id, first_name, last_name, email, password);

  return res.status(201).send({message: 'Usuário criado com sucesso!'})
});

server.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const updatedId = Number(id);
  const { first_name, last_name, email, password } = req.body;
  await User.editUser(updatedId, first_name, last_name, email, password);

  return res.status(200).send({message: 'Usuário atualizado com sucesso'});
});

server.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  const deletedId = Number(id);

  await User.deleteUser(deletedId);

  return res.status(200).send({message: 'Usuário deletado com sucesso'});
})

server.listen(3000, () => {
  console.log('Server is running');
});
