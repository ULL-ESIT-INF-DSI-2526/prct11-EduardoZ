import { Document, Schema, model } from 'mongoose';

export interface BookDocument extends Document {
  title: string,
  author: string,
  genre: 'Fiction' | 'Non-Fiction' | 'Science' | 'History' | 'Fantasy' | 'Biography',
  year: number,
  isbn: string,
  pages: number,
  available?: boolean,
  rating?: number
}

export const BookSchema = new Schema<BookDocument>({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true},
  genre: { type: String, enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy', 'Biography'], },
  year: { type: Number, validate: (value: number) => { if( value < 1000 || value > 2026) throw new Error('Genre value is not valid'); }},
  isbn: { type: String, unique: true, validate: (value: String) => { if( value.length != 13) throw new Error('ISBN must be 13 characters long'); }},
  pages: { type: Number, validate: (value: number) => { if(value < 1) throw new Error('Non valid number of pages provided'); }},
  available: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5 }
});

export const Book = model<BookDocument>('Book', BookSchema);