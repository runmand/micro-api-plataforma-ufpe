import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  OneToMany,
  JoinColumn
} from "typeorm";
import FormsQuestions from "./FormsQuestions";

@Entity({ name: 'forms__choice_types' })
export default class FormsQuestionDomains extends BaseEntity {
  @Column({ name: 'cod', nullable: false, unique: true, length: 3 })
  cod: string;

  @Column({ name: 'name', nullable: false, unique: true, length: 32 })
  name: string;

  @OneToMany(() => FormsQuestions, question => question.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'questions' })
  questions: FormsQuestions[]
}