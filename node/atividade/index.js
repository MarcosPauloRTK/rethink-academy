import express from "express";
import { router as items_router } from "./routes/index.js";
const app = express();

app.set('json spaces', 3); // Retorna JSON formatado

app.use(express.json());
app.use("/items", items_router);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
