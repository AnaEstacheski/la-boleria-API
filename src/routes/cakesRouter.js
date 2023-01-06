import { Router } from "express";

// Schemas
import registerCake from "../models/registerCakeSchema.js"
// Middleware/Validations
import validateSchema from "../middleware/validateSchemas.js";
// Controllers
import { insertCake } from "../controller/cakesController.js";

//Routes
const router = Router();
router.post("/cakes", validateSchema(registerCake), insertCake);

export default router;