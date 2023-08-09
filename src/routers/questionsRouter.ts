import { Router } from "express";
import { dropQuestions, getQuestions, insertQuestions } from "../controllers/question.controller";

const questionRouter = Router();

/* Question Routes */

// ? `POST /api/quizzes/:quizId/questions`
// ? `PUT /api/questions/:id`
// ? `DELETE /api/questions/:id`

questionRouter.route('/questions')
                .get(getQuestions)
                .post(insertQuestions)
                .delete(dropQuestions)

export default questionRouter;