import { getUserByEmail } from "../repository/users.repository.js";
import jwt from "jsonwebtoken";

export default async function validateAuth(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.sendStatus(401);
  
    try {
      const session = jwt.verify(token, process.env.JWT_SECRET);
      if (!session) return res.sendStatus(401);
      const user = (await getUserByEmail(session.email)).rows[0];
      if (!user) return res.sendStatus(401);
      delete user.password;
      res.locals.user = user;
    } catch (err) {
      res.status(500).send(err.message);
    }
    next();
  }