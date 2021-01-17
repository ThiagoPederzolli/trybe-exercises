const connection = require('./connection');

const validate = (id,firstName, lastName, email, password) => {
  if(!id || typeof id !== 'number') return false;
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  if(!email || typeof email !== 'string') return false;
  if(!password || typeof password !== 'string' || password.length < 6) return false;
  return true;
}

const createUser = async (id, firstName, lastName, email, password) => connection()
  .then((db) => db.collection('users').insertOne({_id: id, firstName, lastName, email, password }));

const getUsers = async () => connection()
  .then((db) => db.collection('users').find().toArray())

const findById = async (id) => connection()
  .then((db) => db.collection('users').findOne({_id: id}));

const editUser = async (id, newFirstName, newLastName, newEmail, newPassword) => {
  const user = await connection()
  .then((db) => db.collection('users').findOne({_id: id}));
  const { firstName: oldFirstName, lastName: oldLastName, email: oldEmail, password: oldPassword } = user;

  await connection()
  .then((db) => db.collection('users').updateOne({_id: id}, {$set: {
    firstName: newFirstName || oldFirstName,
    lastName: newLastName || oldLastName,
    email: newEmail || oldEmail,
    password: newPassword || oldPassword
  }}));
};

const deleteUser = async (id) => connection()
  .then((db) => db.collection('users').deleteOne({_id: id}));

module.exports = {
  validate,
  createUser,
  getUsers,
  findById,
  editUser,
  deleteUser
}