import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("success fully work");

  interface IData {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    publisher: {
      name: string;
      location: string;
    };
    reviews: [
      {
        user: string;
        comment: string;
      },
      {
        user: string;
        comment: string;
      }
    ];
    rating: number;
    price: string;
  }
  const data = new Schema<IData>({
    title: "Book 1",
    author: ["Author 1", "Author 2"],
    genre: "Mystery",
    publicationYear: 2020,
    publisher: {
      name: "Publisher A",
      location: "City A",
    },
    reviews: [
      {
        user: "User 1",
        comment: "Great book!",
      },
      {
        user: "User 2",
        comment: "Interesting plot",
      },
    ],
    rating: 4.5,
    price: "90",
  });
});

export default app;
