import express from "express";
import { allBooks, getCheckFeatured, getGenreAndPublisher,  } from "./books.controller";
const router = express.Router();


router.get('/allbooks/:genre', allBooks);
router.get('/books', getGenreAndPublisher);
router.get('/checkFeatured', getCheckFeatured);

export default router;