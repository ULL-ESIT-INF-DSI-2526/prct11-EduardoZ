import request from "request";
export declare enum difficulty {
    easy = "easy",
    medium = "medium",
    hard = "hard"
}
export declare const getCategories: () => Promise<request.Response>;
export declare const findQuestions: (category?: number, difficulty?: difficulty, type?: "multiple" | "boolean") => Promise<request.Response>;
