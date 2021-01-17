const mysql = require('mysql2/promise');
const connection = require('./connection');

const validate = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;
  return true;
}

const getUsers = async () => {
  const [users] = await connection.execute(
    `SELECT id, first_name, last_name, email FROM users`
  );
  return users;
}

const findById = async (id) => {
  const [user] = await connection.execute(
    `SELECT id, first_name, last_name, email FROM users WHERE id = ?`,
    [id]
  );
  return user[0];
}

const editUser = async (id, newFirstName, newLastName, newEmail, newPassword) => {
  const [user] = await connection.execute(
    `SELECT first_name, last_name, email, password FROM users WHERE id = ?`,
    [id]
  );
  const updateUser = user[0];
  const {first_name, last_name, email, password} = updateUser;

  await connection.execute(
    `UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?`,
    [newFirstName || first_name, newLastName || last_name, newEmail || email, newPassword || password, id]
  );
}

const deleteUser = async (id) => {
  await connection.execute(
    `DELETE FROM users
    WHERE id = ?`,
    [id]
  );
}

const createUser = async (firstName, lastName, email, password) => connection.execute(
  `INSERT INTO users (first_name, last_name, email, password) VALUES(?, ?, ? , ?)`,
  [firstName, lastName, email, password],
);

module.exports = {
  validate,
  createUser,
  getUsers,
  findById,
  editUser,
  deleteUser
}