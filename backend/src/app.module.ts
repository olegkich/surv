import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { SurveysModule } from './surveys/surveys.module';
import { Survey } from './entities/survey.entity';
import { User } from './entities/user.entity';
import * as dotenv from 'dotenv';
import { Question } from './entities/question.entity';
import { Answer } from './entities/answer.entity';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [User, Survey, Question, Answer],
    }),
    UsersModule,
    SurveysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
