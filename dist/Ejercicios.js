import request from "request";
export var difficulty;
(function (difficulty) {
    difficulty["easy"] = "easy";
    difficulty["medium"] = "medium";
    difficulty["hard"] = "hard";
})(difficulty || (difficulty = {}));
export const getCategories = () => {
    const url = `https://opentdb.com/api_category.php`;
    return new Promise((resolve, reject) => {
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                reject(error.message);
            }
            else if (response.body.trivia_categories.length === 0) {
                reject("error: no category found");
            }
            else {
                resolve(response);
            }
        });
    });
};
export const findQuestions = (category, difficulty, type) => {
    let url = `https://opentdb.com/api.php?amount=50`;
    if (category)
        url += `&category=${category}`;
    if (difficulty)
        url += `&difficulty=${difficulty}`;
    if (type)
        url += `&type=${type}`;
    return new Promise((resolve, reject) => {
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                reject(error.message);
            }
            else if (response.body.results.length === 0) {
                reject("error: no questions found");
            }
            else {
                resolve(response);
                //console.log(response.body.results.length);
            }
        });
    });
};
findQuestions();
