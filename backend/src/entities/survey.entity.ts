import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';

interface SurveyCreationAttrs {
  name: string;
}

@Table({ tableName: 'surveys' })
export class Survey extends Model<Survey, SurveyCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  user_id: number;
}
