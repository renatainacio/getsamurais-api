import { Router } from "express";
import { signin, signup } from "../controllers/users.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import userSchema from "../schemas/users.schemas.js";
import validateAuth from "../middlewares/validateAuth.js";


const userRouter = Router();

userRouter.post("/users", validateSchema(userSchema), signup);

userRouter.post("/", signin);

userRouter.get("/users/:id", validateAuth);

export default userRouter;

