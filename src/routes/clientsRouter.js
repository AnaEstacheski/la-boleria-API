import { Router } from "express";

// Schemas
import registerClient from "../models/registerClientSchema.js"
// Middleware/Validations
import validateSchema from "../middleware/validateSchemas.js";
// Controllers
import { insertClient } from "../controller/clientsController.js";

//Routes
const router = Router();
router.post("/clients", validateSchema(registerClient), insertClient);
// router.get('/clients/:id/orders');

export default router;