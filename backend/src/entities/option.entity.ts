import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Question } from './question.entity';

interface OptionCreationAttrs {
  option: string;
  question_id: number;
}

@Table({ tableName: 'options' })
export class Option extends Model<Option, OptionCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  option: string;

  @BelongsTo(() => Question)
  question: Question;

  @ForeignKey(() => Question)
  question_id: number;
}
