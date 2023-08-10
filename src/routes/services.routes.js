import { Router } from "express";

const serviceRouter = Router();

serviceRouter.post("/services");

serviceRouter.get("/services");

serviceRouter.patch("/services");

serviceRouter.put("/services");

serviceRouter.delete("/services");

export default serviceRouter;