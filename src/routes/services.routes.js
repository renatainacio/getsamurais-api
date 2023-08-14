import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import { deleteService, getCategories, postService, updateService } from "../controllers/services.controllers.js";

const serviceRouter = Router();

serviceRouter.get("/categories", getCategories);

serviceRouter.post("/services", validateAuth, postService);

serviceRouter.get("/services", validateAuth);

serviceRouter.put("/services/:id", validateAuth, updateService);

serviceRouter.delete("/services", validateAuth, deleteService);

export default serviceRouter;