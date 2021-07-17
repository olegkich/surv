import { serviceResponse } from "../../types";
import AnswerService from "./AnswerService";
import { token } from "../../types";
import jwt_decode from "jwt-decode";

export default {
  submitAnswer: async (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decode: token = jwt_decode(token);

    const service: any = await AnswerService.submitAnswer({
      user_name: decode.name,
      survey_id: req.body.survey_id,
      answers: req.body.answers,
    });
    if (service) {
      res.status(service.status).send();
    }
  },
  getAnswers: async (req, res) => {
    const service = await AnswerService.getAnswers({
      question_id: req.params.question_id,
    });
    res.status(service.status).json(service.data);
  },
  getQuestions: async (req, res) => {
    const service: any = await AnswerService.getQuestions({
      survey_id: req.params.survey_id,
    });
    res.status(service.status).json(service.data);
  },
};
