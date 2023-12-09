import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { checkIfUserAlreadyRegistered, createUser, getUserByEmail } from '../repository/users.repository.js';

async function signup(fullName, gender, username, email, cpf, phone, city, state, password, image) {
  const hash = bcrypt.hashSync(password, 10);
  try {
    const user = await checkIfUserAlreadyRegistered(email, cpf);
    //if (user.rows.length !== 0) return res.sendStatus(409);
    await createUser({ fullName, gender, username, email, cpf, phone, city, state, password: hash, image });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signin(email, password) {
  const user = await getUserByEmail(email);
  //if (user.rows.length === 0) return res.sendStatus(401);
  const correctPassword = bcrypt.compareSync(password, user.rows[0].password);
  //if (!correctPassword) return res.sendStatus(401);
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  return token;
}

export const usersService = {
  signup,
  signin,
};
