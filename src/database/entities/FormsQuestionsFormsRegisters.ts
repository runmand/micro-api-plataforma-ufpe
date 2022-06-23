import BaseEntity from "./BaseEntity";
import {
  Entity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import FormsQuestions from "./FormsQuestions";
import FormsRegisters from "./FormsRegisters";

@Entity({ name: 'forms__questions_forms__registers' })
export default class FormsQuestionsFormsRegisters extends BaseEntity {
  @ManyToOne(() => FormsRegisters, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'form_id' })
  form_id: FormsRegisters;

  @ManyToOne(() => FormsQuestions, { nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'question_id' })
  question_id: FormsQuestions;
}