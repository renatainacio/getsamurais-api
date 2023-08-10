import { Router } from "express";


const userRouter = Router();

userRouter.post("/users");

userRouter.post("users");

userRouter.get("/users/:id");

export default userRouter;

