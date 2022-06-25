import BaseEntity from "./BaseEntity";
import {
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import FormsQuestions from "./FormsQuestions";
import FormsRegisters from "./FormsRegisters";
import UsersAnswers from "./UsersAnswers";

@Entity({ name: 'forms__questions_forms__registers' })
export default class FormsQuestionsFormsRegisters extends BaseEntity {
  @ManyToOne(() => FormsRegisters, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'form_id' })
  formId: FormsRegisters;

  @ManyToOne(() => FormsQuestions, { nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'question_id' })
  questionId: FormsQuestions;

  @OneToMany(() => UsersAnswers, answer => answer.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'answers' })
  answers: UsersAnswers[];
}