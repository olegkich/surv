import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from 'src/entities/answer.entity';
import { Question } from 'src/entities/question.entity';
import { Survey } from 'src/entities/survey.entity';
import { IQuestion, SurveyDto } from './dto/surveyDto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey) private surveyRepository: typeof Survey,
    @InjectModel(Question) private questionRepository: typeof Question,
    @InjectModel(Answer) private answerRepository: typeof Answer,
  ) {}

  async create(surveyDto: SurveyDto) {
    const survey = await this.surveyRepository.create(surveyDto);

    surveyDto.questions.forEach(async (q: IQuestion) => {
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

  findAll() {
    return this.surveyRepository.findAll();
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
