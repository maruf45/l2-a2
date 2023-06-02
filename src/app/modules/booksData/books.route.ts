import express from "express";
import { allBooks,  } from "./books.controller";
const router = express.Router();


router.get('/allbooks/:genre', allBooks)

export default router;