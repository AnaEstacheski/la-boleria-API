import { Router } from "express";

// Schemas

// Middleware/Validations

// Controllers
import { insertCake } from "../controller/cakesController.js";

//Routes
const router = Router();
router.post("/cakes", insertCake);

export default router;