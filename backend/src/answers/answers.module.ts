import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Answer } from 'src/entities/answer.entity';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [SequelizeModule.forFeature([Answer])],
})
export class AnswersModule {}
