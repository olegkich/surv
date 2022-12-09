import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from 'src/entities/answer.entity';
import { Option } from 'src/entities/option.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer) private answerRepository: typeof Answer) {}

  async create(createAnswerDto: CreateAnswerDto) {
    await createAnswerDto.answers.forEach(async (answer) => {
      await this.answerRepository.create({
        option_id: answer.option_id,
        question_id: answer.question_id,
        survey_id: createAnswerDto.survey_id,
        user_id: createAnswerDto.user_id,
      });
    });
  }

  async findAllBySurvey(survey_id: number) {
    return await this.answerRepository.findAndCountAll({
      where: { survey_id },
      include: [{ model: Option, attributes: ['option'] }],
    });
  }

  remove(user_id: number, survey_id: number) {
    return this.answerRepository.destroy({
      where: {
        user_id,
        survey_id,
      },
    });
  }
}
