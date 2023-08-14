import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import { deleteService, getCategories, getServices, postService, updateService } from "../controllers/services.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import serviceSchema from "../schemas/services.schemas.js";

const serviceRouter = Router();

serviceRouter.get("/categories", getCategories);

serviceRouter.post("/services", validateAuth, validateSchema(serviceSchema), postService);

serviceRouter.get("/services", validateAuth, getServices);

serviceRouter.put("/services/:id", validateAuth, updateService);

serviceRouter.delete("/services/:id", validateAuth, deleteService);

export default serviceRouter;