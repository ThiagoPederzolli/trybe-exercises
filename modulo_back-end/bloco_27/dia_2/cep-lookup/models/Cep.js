const connection = require('./connection');

const getCep = async (cep) => connection()
  .then((db) => db.collection('ceps').findOne({CEP: cep}));

const saveCep = async (cep, uf, cidade, bairro, logradouro) => connection()
  .then((db) => db.collection('ceps').insertOne({CEP: cep, uf, cidade, bairro, logradouro}));

module.exports = {
  getCep,
  saveCep,
}