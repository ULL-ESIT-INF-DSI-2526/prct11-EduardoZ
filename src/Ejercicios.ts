import request from "request";

export enum difficulty{
  easy = "easy",
  medium = "medium",
  hard = "hard"
}

/**
 * 
 * @returns Listado de categorías para la API
 */
export const getCategories = () => {
  const url = `https://opentdb.com/api_category.php`;
  return new Promise<request.Response>((resolve, reject) => {
    request(
      { url: url, json: true },
      (error: Error, response: request.Response) => {
        if (error) {
          reject(error.message);
        } else if (response.body.trivia_categories.length === 0) {
          reject("error: no category found");
        } else {
          resolve(response);
        }
      },
    );
  });
};

/**
 * 
 * @param category Id de la categoría
 * @param difficulty Dificultad de la pregunta
 * @param type Tipo de pregunta
 * @returns 
 */
export const findQuestions = (category?: number, difficulty?: difficulty, type?: "multiple" | "boolean") => {
  let url = `https://opentdb.com/api.php?amount=50`;
  if(category) url += `&category=${category}`;
  if(difficulty) url += `&difficulty=${difficulty}`;
  if(type) url += `&type=${type}`;
  return new Promise<request.Response>((resolve, reject) => {
    request(
      { url: url, json: true },
      (error: Error, response: request.Response) => {
        if (error) {
          reject(error.message);
        } else if (response.body.results.length === 0) {
          reject("error: no questions found");
        } else {
          resolve(response);
          //console.log(response.body.results.length);
        }
      },
    );
  });
};