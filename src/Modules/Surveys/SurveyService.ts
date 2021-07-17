import { getConnection, getRepository } from "typeorm";
import { HTTP_ACCEPTED, HTTP_CREATED } from "../../const";
import { Questions } from "../../entity/Questions";
import { Surveys } from "../../entity/Surveys";
import { serviceResponse } from "../../types";

export default {
  getSurveys: async (data?) => {
    console.log("called");
    const surveyRepository = getRepository(Surveys);
    const surveys = await surveyRepository.find();
    return surveys;
  },
  getSurveyById: async (data) => {
    const surveyId = data.surveyId;
    const surveyRepository = getRepository(Surveys);
    const survey = await surveyRepository.findOne(surveyId, {
      relations: ["questions"],
    });

    return survey;
  },
  createSurvey: async (data): Promise<number> => {
    const insertSurvey: any = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Surveys)
      .values([{ survey_name: data.surveyName, user_name: data.userName }])
      .returning("id")
      .execute();

    const questionRepository = getRepository(Questions);
    const questions = [
      ...data.questions.map((question) => {
        return { question, survey_id: insertSurvey.raw[0].id };
      }),
    ];

    questions.forEach(async (question) => {
      await questionRepository.insert({
        question: question.question,
        survey_id: question.survey_id,
      });
    });

    return HTTP_CREATED;
  },
  getUserSurveys: async (data): Promise<serviceResponse> => {
    const user_name = data.user_name;

    const surveyRepository = getRepository(Surveys);
    const surveys = await surveyRepository.find({
      select: ["id", "survey_name"],
      where: {
        user_name,
      },
    });
    await console.log(await surveys, "surveys");
    return { status: HTTP_ACCEPTED, data: surveys };
  },
};
