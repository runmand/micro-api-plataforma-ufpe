import UsersRegisters from "./UsersRegisters";
import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import FormsChoices from "./FormsChoices";
// import FormsQuestionsFormsQuestions from "./FormsQuestionsFormsQuestions";

@Entity({ name: 'forms__questions' })
export default class FormsQuestions extends BaseEntity {
  @Column({ name: 'question', nullable: false, unique: true, length: 256 })
  question: string;

  @Column({ name: 'score', nullable: false, unique: false, type: 'int4range' })
  score: number[];

  @ManyToOne(() => FormsChoices, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'forms__choices_id' })
  choiceId: FormsChoices;

  // @OneToMany(() => FormsQuestionsFormsQuestions, FQFQ => FQFQ.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  // @JoinColumn({ name: 'parents' })
  // parents: FormsQuestionsFormsQuestions[]

  // @OneToMany(() => FormsQuestionsFormsQuestions, FQFQ => FQFQ.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  // @JoinColumn({ name: 'children' })
  // children: FormsQuestionsFormsQuestions[]
}