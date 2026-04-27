import { describe, it, expect, beforeAll } from 'vitest';
import mongoose from 'mongoose';
import { createBook } from '../src/functions.js';
import { Book } from '../src/models/book.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017//library-app');
});

describe('Book Service Tests', () => {
  const book1 = new Book({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: 'Fantasy',
    year: 2026,
    isbn: "1234567890123",
    pages: 100,
    available: true
  });

  it('Creacion de un libro', async () => {
    createBook(book1);
  });
});