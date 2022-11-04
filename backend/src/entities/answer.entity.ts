import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Question } from './question.entity';
import { User } from './user.entity';

interface AnswerCreationAttrs {
  answer: string;
  question_id: number;
}

@Table({ tableName: 'answers' })
export class Answer extends Model<Answer, AnswerCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  answer: string;

  @BelongsTo(() => Question)
  question: Question;

  @ForeignKey(() => Question)
  question_id: number;
}
