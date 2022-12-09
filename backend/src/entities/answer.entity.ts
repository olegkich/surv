import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Question } from './question.entity';
import { Survey } from './survey.entity';
import { User } from './user.entity';

interface AnswerCreationAttrs {
  option_id: number;
  question_id: number;
  user_id: number;
  survey_id: number;
}

@Table({ tableName: 'answers' })
export class Answer extends Model<Answer, AnswerCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
  })
  option_id: number;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Question)
  question: Question;

  @ForeignKey(() => Question)
  question_id: number;

  @BelongsTo(() => Survey)
  survey: Survey;

  @ForeignKey(() => Survey)
  survey_id: number;
}
