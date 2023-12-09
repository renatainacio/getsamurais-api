import { usersService } from '../services/users.service.js';

export async function signup(req, res) {
  const { fullName, gender, username, email, cpf, phone, city, state, password, image } = req.body;
  const user = await usersService.signup(fullName, gender, username, email, cpf, phone, city, state, password, image);
  await createUser({ fullName, gender, username, email, cpf, phone, city, state, password: hash, image });
  res.status(201).send(user);
}

export async function signin(req, res) {
  const { email, password } = req.body;
  const token = await usersService.signin(email, password);
  res.status(200).send({ token: token });
}

export function getUser(req, res) {
  return res.send(res.locals.user);
}
