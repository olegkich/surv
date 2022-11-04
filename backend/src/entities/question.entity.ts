import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Survey } from './survey.entity';
import { User } from './user.entity';

interface QuestionCreationAttrs {
  question: string;
  survey_id: number;
}

@Table({ tableName: 'questions' })
export class Question extends Model<Question, QuestionCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  question: string;

  @BelongsTo(() => Survey)
  survey: Survey;

  @ForeignKey(() => Survey)
  survey_id: number;
}
