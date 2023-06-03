import { Request, Response } from "express";
import { checkFeatured, getGenreAndPublisherName, getSpecificGenre } from "./books.service";

export const allBooks = async (req: Request, res: Response) => {
  const genreName: string = req.params.genre;

  const books = await getSpecificGenre(genreName);
  res.status(200).json({
    status: "success",
    data: books,
  });
};

export const getGenreAndPublisher = async (req: Request, res: Response) => {
  const {genre, publisherName} = req.query as any;
  console.log(genre, publisherName);
  
  const books = await getGenreAndPublisherName(genre, publisherName);
  res.status(200).json({
    status: "success",
    data: books,
  });
};


export const  getCheckFeatured = async(req: Request, res: Response) => {
  const books = await checkFeatured();
  res.status(200).json({
    status: 'success',
    data: books
  })
}