const connection = require('./connection');
const { ObjectId } = require('mongodb');
// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { _id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  _id,
  firstName,
  middleName,
  lastName,
  name: fullName,
 };
};

// Busca todos os autores do banco.

const getAll = async () => {
  return connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => authors.map(({ _id, firstName, middleName, lastName }) => getNewAuthor({ _id, firstName, middleName, lastName })))
};

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
  const authorData = await connection()
  .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { _id, firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    _id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// const create = async (firstName, middleName, lastName) => connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
//   [firstName, middleName, lastName],
// );

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};