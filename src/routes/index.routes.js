import { Router } from "express";
import userRouter from "./users.routes";
import serviceRouter from "./services.routes";

const router = Router();

router.use(userRouter);
router.use(serviceRouter);

export default router;