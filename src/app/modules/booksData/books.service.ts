import { IData } from "./books.interface";
import data from "./books.model";

// to get specific genre
export const getSpecificGenre = async (
  value: string
): Promise<IData[] | null> => {
  console.log(value);
  const books = await data.find({ genre: value });
  return books;
};

export const getGenreAndPublisherName = async (
  genre: string,
  publisherName: string
): Promise<IData[] | null> => {
  const books = await data.find({
    $and: [{ genre: genre }, { "publisher.name": publisherName }],
  });
  return books;
};

export const checkFeatured = async() =>{
  const books = await data.aggregate([{
    $addFields: {
        featured: {
            $cond: {
                if: { $gte: ['$rating', 4.5] }, // Condition: Rating greater than 4
                then: 'Popular',
                else: {
                    $cond: {
                        if: { $gte: ["$rating", 4] },
                        then: 'Best Seller',
                        else: ''
                    }
                },
            },
        }
    }
}
])
return books;
}