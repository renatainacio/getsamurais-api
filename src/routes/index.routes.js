import { Router } from "express";
import userRouter from "./users.routes.js";
import serviceRouter from "./services.routes.js";

const router = Router();

router.use(userRouter);
router.use(serviceRouter);

export default router;