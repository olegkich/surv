import { Router } from "express";
import SurveyController from "./SurveyController";

const surveyRouter = Router();

surveyRouter.route("/").get(SurveyController.getSurveys);

surveyRouter.route("/:id").get(SurveyController.getSurveyById);

surveyRouter.route("/").post(SurveyController.createSurvey);

surveyRouter.route("/:id").delete(SurveyController.deleteSurvey);

export default surveyRouter;
