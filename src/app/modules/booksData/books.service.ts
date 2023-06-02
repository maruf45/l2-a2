import { IData } from "./books.interface";
import data from "./books.model";

// export const createBooksData = async () => {
//   const booksData = await new data({
//     title: "Book asfd",
//     author: ["Author 1", "Author 2"],
//     genre: "Mystery",
//     publicationYear: 2020,
//     publisher: {
//       name: "Publishfer A",
//       location: "Citfy A",
//     },
//     reviews: [
//       {
//         user: "Userf 1",
//         comment: "Greaft book!",
//       },
//       {
//         user: "User f2",
//         comment: "Intefresting plot",
//       },
//     ],
//     rating: 4.5,
//     price: "9f0",
//   });
  
//   await booksData.save();
//   return booksData
// };

export const getSpecificGenre  = async(value): Promise<IData[] | null> => {
  console.log(value);
  
  const books = await data.find({genre: value});
  return books;
}