import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Option } from 'src/entities/option.entity';
import { Question } from 'src/entities/question.entity';
import { Survey } from 'src/entities/survey.entity';
import { User } from 'src/entities/user.entity';
import {
  QuestionType,
  CreateSurveyDto,
  FindAllSurveyDto,
} from './dto/surveyDto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey) private surveyRepository: typeof Survey,
    @InjectModel(Question) private questionRepository: typeof Question,
    @InjectModel(Option) private optionRepository: typeof Option,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = await this.surveyRepository.create(createSurveyDto);

    createSurveyDto.questions.forEach(async (q: QuestionType) => {
      const question = await this.questionRepository.create({
        question: q.question,
        survey_id: survey.id,
      });

      q.options.forEach(async (option: string) => {
        await this.optionRepository.create({
          option,
          question_id: question.id,
        });
      });
    });

    return survey;
  }

  async findAll(options: FindAllSurveyDto) {
    if (options.survey_name && options.user_name) {
      return await this.surveyRepository.findAll({
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

    if (options.user_name) {
      return await this.surveyRepository.findAll({
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
      return await this.surveyRepository.findAll({
        where: { name: options.survey_name },
        attributes: ['id', 'name'],
      });
    }

    return await this.surveyRepository.findAll({
      include: [{ model: User, attributes: ['name'] }],
      attributes: ['id', 'name'],
    });
  }

  async findOne(id: number) {
    const survey = await this.surveyRepository.findOne({
      where: {
        id,
      },
    });

    const questions = await this.questionRepository.findAll({
      where: { survey_id: survey.id },
      include: { model: Option },
    });

    return {
      survey_name: survey.name,
      survey_id: survey.id,
      questions,
    };
  }

  remove(id: number) {
    return this.surveyRepository.destroy({ where: { id }, cascade: true });
  }
}
