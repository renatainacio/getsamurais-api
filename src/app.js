import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import httpStatus from 'http-status';
import handleApplicationErrors from './middlewares/errorHandling.js';
import router from './routes/index.routes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app
  .use(express.json())
  .get("/health", (req, res) => res.sendStatus(httpStatus.OK))
  .use(router)
  .use(handleApplicationErrors)
  .listen(PORT, () => console.log(`Server running on port ${PORT}`));
