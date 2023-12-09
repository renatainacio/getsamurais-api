import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { usersRepository } from '../repository/users.repository.js';
import { conflictError } from '../errors/conflictError.js';
import { unauthorizedError } from '../errors/unauthorizedError.js';

async function signup(fullName, gender, username, email, cpf, phone, city, state, password, image) {
  const hash = bcrypt.hashSync(password, 10);
  const user = await usersRepository.checkIfUserAlreadyRegistered(email, cpf);
  if (user.rows.length !== 0) throw conflictError();
  await usersRepository.createUser({ fullName, gender, username, email, cpf, phone, city, state, password: hash, image });
  res.sendStatus(201);
}

async function signin(email, password) {
  const user = await usersRepository.getUserByEmail(email);
  if (user.rows.length === 0) throw unauthorizedError();
  const correctPassword = bcrypt.compareSync(password, user.rows[0].password);
  if (!correctPassword) throw unauthorizedError();
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  return token;
}

export const usersService = {
  signup,
  signin,
};
