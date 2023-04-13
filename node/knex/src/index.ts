import Express from "express";
import { router as booksRouter } from "./routes/books/index.ts";
// import { router as authorRouter } from ".routes/authors/index.ts";

const app = Express();

app.use(Express.json());
app.use("/api/v1/books", booksRouter);
// app.use("/api/v1/authors", authorsRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
