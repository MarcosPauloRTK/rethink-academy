import booksController from "../../controllers/booksController.ts";
// const booksController = require("../../controllers/booksController.ts");
import Express from "express";

const router = Express.Router();

router.get("/", booksController.index);
router.get("/:id", booksController.show);

export { router };
