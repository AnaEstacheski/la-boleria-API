import { Router } from "express";

// Schemas
import registerOrder from "../models/registerOrderSchema.js"
// Middleware/Validations
import validateSchema from "../middleware/validateSchemas.js";
// Controllers
import { getOrders, insertOrder } from "../controller/ordersController.js";

//Routes
const router = Router();
router.post("/order", validateSchema(registerOrder), insertOrder);
router.get("/order", getOrders);
// router.get("/order/:id", );

export default router;