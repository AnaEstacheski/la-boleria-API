import express from "express"
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
