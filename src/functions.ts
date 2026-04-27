import { Book, BookDocument } from './models/book.js'
import { MongoClient } from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'library-app';

export const createBook = async (data: BookDocument) => {
  return await new Book(data).save();
};

export const GetBooks = async() => {
  /*MongoClient.connect(dbURL).then((client) => {
    const db = client.db(dbName);
    return db.collection<BookDocument>;
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });*/
}