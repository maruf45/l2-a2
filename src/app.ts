import express, { Application } from "express";
import cors from "cors";
import router from "./app/modules/booksData/books.route";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded());

app.use("/", router);
app.use('/allbooks/', router)

export default app;
