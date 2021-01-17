const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
}

const isValid = (firstName, middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!middleName || typeof middleName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;

  return true;
}

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(({_id, firstName, middleName, lastName})=> getNewAuthor({
    id: _id,
    firstName,
    middleName,
    lastName,
  }));
}

const findById = async (id) => {
  const authorData = await Author.findById(id);

  if(!author) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
}

const create = async (firstName, middleName, lastName) => {
  const userValid = isValid(firstName, middleName, lastName);

  if(!userValid) return false;

  await Author.create(firstName, middleName, lastName);

  return true;
}

module.exports = {
  getAll,
  findById,
  create,
}
