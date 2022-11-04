import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from 'src/entities/question.entity';
import { Survey } from 'src/entities/survey.entity';
import { Answer } from 'src/entities/answer.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Survey, Answer, Question]), JwtModule],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
