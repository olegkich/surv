import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Answers } from "./Answers";
import { Surveys } from "./Surveys";

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  question: string;

  @ManyToOne(() => Surveys)
  @JoinColumn([{ name: "survey_id", referencedColumnName: "id" }])
  survey_id: Surveys;

  @OneToMany(() => Answers, (answer) => answer.question_id)
  answers: Answers[];
}
