import express from "express"
import dotenv from "dotenv";

dotenv.config();

import cakesRouter from "./routes/cakesRouter.js"
import clientsRouter from "./routes/clientsRouter.js"

const app = express();
app.use(express.json());

app.use(cakesRouter);
app.use(clientsRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
