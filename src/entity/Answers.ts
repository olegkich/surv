import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Questions } from "./Questions";
import { Surveys } from "./Surveys";
import { Users } from "./Users";

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  answer: string;

  @ManyToOne(() => Questions)
  @JoinColumn([{ name: "question_id", referencedColumnName: "id" }])
  question_id: Questions;

  @ManyToOne(() => Surveys)
  @JoinColumn([{ name: "survey_id", referencedColumnName: "id" }])
  survey_id: Surveys;

  @ManyToOne(() => Users)
  @JoinColumn([{ name: "user_name", referencedColumnName: "user_name" }])
  user_name: Users;
}
