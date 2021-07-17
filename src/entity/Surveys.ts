import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import surveyRouter from "../Modules/Surveys/SurveyRoutes";
import { Questions } from "./Questions";
import { Users } from "./Users";

@Entity()
export class Surveys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  survey_name: string;

  @ManyToOne(() => Users)
  @JoinColumn([{ name: "user_name", referencedColumnName: "user_name" }])
  user_name: Users;

  @OneToMany(() => Questions, (question) => question.survey_id)
  questions: Questions[];
}
