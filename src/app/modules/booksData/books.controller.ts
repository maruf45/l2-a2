import { Request, Response } from "express";
import {  getSpecificGenre } from "./books.service";

// export const createBooks = async (req: Request, res: Response) => {
//   const books = await createBooksData();
//   res.status(200).json({
//     status: "success",
//     data: books,
//   });
// };


export const allBooks = async (req: Request, res: Response) => {
  const genreName: string = req.params.genre;
  
  const books = await getSpecificGenre(genreName);
  res.status(200).json({
    status: "success",
    data: books,
  });
};
