const express = require('express');
const server = express();

const User = require('./models/User');

server.use(express.json());

server.get('/user', async (req, res) => {
  const users = await User.getUsers();

  res.status(200).json(users);
});

server.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({message: 'Usuário não encontrado'});
  }

  res.status(200).json(user);
});


server.post('/user', async (req, res) => {
  const {first_name, last_name, email, password } = req.body;
  const validated = User.validate(first_name, last_name, email, password);
  if(!validated) {
    return res.status(200).send({message: 'Dados inválidos'});
  }
  await User.createUser(first_name, last_name, email, password);

  return res.status(201).send({ message: 'Usuário criado com sucesso'});
});

server.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const {first_name, last_name, email, password } = req.body;
  await User.editUser(id, first_name, last_name, email, password);
  return res.status(200).send({ message: 'Usuário editado com sucesso'});
})

server.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({message: 'Usuário não encontrado'});
  }
  
  await User.deleteUser(id);
  return res.status(200).send({ message: 'Usuário deletado com sucesso'});
})

server.listen(3000, () => {
  console.log('Server is running');
});