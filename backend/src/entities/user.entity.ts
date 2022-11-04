import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreatingAttrs {
  name: string;
  password: string;
  email: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreatingAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: { msg: 'It must be a valid Email address' },
    },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
