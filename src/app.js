import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index.routes.js';
import { handleApplicationErrors } from './middlewares/errorHandling.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(handleApplicationErrors);

dotenv.config();
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
