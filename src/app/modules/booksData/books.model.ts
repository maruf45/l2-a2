import { Schema, model } from "mongoose";
import { IData } from "./books.interface";

const bookData = new Schema<IData>({
  title: {
    type: String,
    required: true,
  },
  author: [String, String],
  genre: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  publisher: {
    name: String,
    location: String,
  },
  reviews: [
    {
      user: String,
      comment: String,
    },
    {
      user: String,
      comment: String,
    },
  ],
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true

  },
});
const data = model<IData>("books", bookData);
console.log(data);


export default data;
