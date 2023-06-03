import express from "express";
import {
  allBooks,
  getCheckFeatured,
  getGenreAndPublisher,
  getIntegerBookPrice,
} from "./books.controller";
const router = express.Router();

router.get("/allbooks/:genre", allBooks);
router.get("/books", getGenreAndPublisher);
router.get("/checkFeatured", getCheckFeatured);
router.get("/checkPrice", getIntegerBookPrice);

export default router;
