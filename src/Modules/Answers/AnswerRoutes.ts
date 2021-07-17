import { Router } from "express";
import AnswerController from "./AnswerController";

const answerRouter = Router();

answerRouter.route("/").post(AnswerController.submitAnswer);

answerRouter.route("/:question_id").get(AnswerController.getAnswers);

answerRouter.route("/questions/:survey_id").get(AnswerController.getQuestions);

export default answerRouter;
