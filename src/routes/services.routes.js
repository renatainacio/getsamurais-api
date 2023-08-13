import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";

const serviceRouter = Router();

serviceRouter.post("/services", validateAuth);

serviceRouter.get("/services", validateAuth);

serviceRouter.patch("/services", validateAuth);

serviceRouter.put("/services", validateAuth);

serviceRouter.delete("/services", validateAuth);

export default serviceRouter;