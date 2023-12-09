import { Router } from 'express';
import { getUser, signin, signup } from '../controllers/users.controllers.js';
import validateSchema from '../middlewares/validateSchema.js';
import userSchema from '../schemas/users.schemas.js';
import validateAuth from '../middlewares/validateAuth.js';
import { getUserServices } from '../controllers/services.controllers.js';

const userRouter = Router();

userRouter.post('/users', validateSchema(userSchema), signup);

userRouter.post('/', signin);

userRouter.get('/users/me', validateAuth, getUser);

userRouter.get('/users/me/services', validateAuth, getUserServices);

userRouter.get('/users/:id', validateAuth);

export default userRouter;
