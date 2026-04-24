import { describe, test, expect } from 'vitest';
import { getCategories, findQuestions, difficulty } from '../src/Ejercicios'

describe("getCategories function", () => {
  test("getCategories should provide a non-empty list", () => {
    return getCategories().then((data) => {
      expect(data.body.trivia_categories.length).to.be.greaterThan(0);
    });
  });
});