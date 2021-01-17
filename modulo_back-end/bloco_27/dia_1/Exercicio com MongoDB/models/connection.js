const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
  .then((conn) => conn.db('users_crud'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;