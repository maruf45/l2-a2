import express from "express";
import { allBooks, getGenreAndPublisher,  } from "./books.controller";
const router = express.Router();


router.get('/allbooks/:genre', allBooks);
router.get('/books', getGenreAndPublisher)

export default router;