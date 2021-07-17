import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Questions } from "../../entity/Questions";
import { Surveys } from "../../entity/Surveys";
import SurveyService from "./SurveyService";
import jwt_decode from "jwt-decode";
import { token } from "../../types";

export default {
  getSurveys: async (req, res) => {
    const surveys = await SurveyService.getSurveys();

    res.json(surveys);
  },

  getSurveyById: async (req, res) => {
    const surveyId: number = req.params.id;
    const survey = await SurveyService.getSurveyById(surveyId);

    res.json(survey);
  },

  createSurvey: async (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decode: token = jwt_decode(token);

    const created = await SurveyService.createSurvey({
      surveyName: req.body.surveyName,
      questions: req.body.questions,
      userName: decode.name,
    });
    if (created) {
      res.status(created).send();
    }
    res.status(400).send();
  },
  deleteSurvey: async (req, res) => {},
  getUserSurveys: async (req, res) => {
    console.log("yes");
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decode: token = jwt_decode(token);

    const service = await SurveyService.getUserSurveys({
      user_name: decode.name,
    });

    res.status(service.status).json(service.data);
  },
};
