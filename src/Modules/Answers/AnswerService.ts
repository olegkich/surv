import { getConnection, getRepository } from "typeorm";
import { HTTP_ACCEPTED, HTTP_CREATED } from "../../const";
import { Answers } from "../../entity/Answers";
import { Questions } from "../../entity/Questions";
import { serviceResponse } from "../../types";

export default {
  submitAnswer: async (data): Promise<serviceResponse> => {
    const answerRepository = getRepository(Answers);

    data.answers.forEach(async (answer) => {
      await answerRepository.insert({
        answer: answer.answer,
        question_id: answer.question_id,
        survey_id: data.survey_id,
        user_name: data.user_name,
      });
    });

    return { status: HTTP_CREATED };
  },
  getAnswers: async (data): Promise<serviceResponse> => {
    const question_id = data.question_id;
    const answerRepository = getRepository(Answers);
    const answers = await answerRepository.find({
      where: {
        question_id: question_id,
      },
    });

    return { status: HTTP_ACCEPTED, data: answers };
  },
  deleteAnswer: async (data): Promise<serviceResponse> => {
    return { status: HTTP_ACCEPTED };
  },
  getQuestions: async (data): Promise<serviceResponse> => {
    const survey_id = data.survey_id;
    const questionRepository = getRepository(Questions);

    const questions = await questionRepository.find({
      where: {
        survey_id,
      },
    });

    return { status: HTTP_ACCEPTED, data: questions };
  },
};
