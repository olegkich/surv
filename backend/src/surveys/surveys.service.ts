import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from 'src/entities/answer.entity';
import { Question } from 'src/entities/question.entity';
import { Survey } from 'src/entities/survey.entity';
import { User } from 'src/entities/user.entity';
import { IQuestion, CreateSurveyDto, FindAllSurveyDto } from './dto/surveyDto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey) private surveyRepository: typeof Survey,
    @InjectModel(Question) private questionRepository: typeof Question,
    @InjectModel(Answer) private answerRepository: typeof Answer,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = await this.surveyRepository.create(createSurveyDto);

    createSurveyDto.questions.forEach(async (q: IQuestion) => {
      const question = await this.questionRepository.create({
        question: q.question,
        survey_id: survey.id,
      });

      console.log(q.answers);
      q.answers.forEach(async (answer: string) => {
        console.log(answer, question.id);

        await this.answerRepository.create({
          answer,
          question_id: question.id,
        });
      });
    });

    return survey;
  }

  findAll(options: FindAllSurveyDto) {
    if (!options.user_name && !options.survey_name) {
      return this.surveyRepository.findAll({
        include: [{ model: User, attributes: ['name'] }],
        attributes: ['id', 'name'],
      });
    }

    if (options.user_name) {
      return this.surveyRepository.findAll({
        include: [
          {
            model: User,
            required: true,
            where: {
              name: options.user_name,
            },
            attributes: ['name'],
          },
        ],
        attributes: ['id', 'name'],
      });
    }

    if (options.survey_name) {
      return this.surveyRepository.findAll({
        where: { name: options.survey_name },
        attributes: ['id', 'name'],
      });
    }

    if (options.survey_name && options.user_name) {
      return this.surveyRepository.findAll({
        include: [
          {
            model: User,
            where: {
              name: options.user_name,
            },
            required: true,
            attributes: ['name'],
          },
        ],
        where: {
          name: options.survey_name,
        },
        attributes: ['name', 'id'],
      });
    }
  }

  findOne(id: number) {
    return this.surveyRepository.findOne({
      where: {
        id,
      },
      include: [Question, Answer],
    });
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
