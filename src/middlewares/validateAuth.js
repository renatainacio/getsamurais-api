import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../repository/users.repository.js';
import { unauthorizedError } from '../errors/unauthorizedError.js';

export default async function validateAuth(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace('Bearer ', '');
  if (!token) throw unauthorizedError();
  const session = jwt.verify(token, process.env.JWT_SECRET);
  if (!session) throw unauthorizedError();
  const user = (await getUserByEmail(session.email)).rows[0];
  if (!user) throw unauthorizedError();
  delete user.password;
  res.locals.user = user;

  next();
}
