import BaseEntity from "./BaseEntity";
import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column
} from "typeorm";
import UsersRegisters from "./UsersRegisters";
import FormsQuestionsFormsRegisters from "./FormsQuestionsFormsRegisters";

@Entity({ name: 'users_answers' })
export default class UsersAnswers extends BaseEntity {
  @Column({ name: 'answer', nullable: false, unique: false, length: 256 })
  answer: string;

  @Column({ name: 'score', nullable: false, unique: false, type: 'int4range' })
  score: number[];

  @ManyToOne(() => UsersRegisters, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  userId: UsersRegisters;

  @ManyToOne(() => FormsQuestionsFormsRegisters, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'form_question_id' })
  formQuestionId: FormsQuestionsFormsRegisters;
}