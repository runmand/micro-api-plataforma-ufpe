import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import FormsChoices from "./FormsChoices";
import FormsQuestionsFormsQuestions from "./FormsQuestionsFormsQuestions";
import FormsQuestionDomains from "./FormsQuestionDomains";
import FormsQuestionsFormsRegisters from "./FormsQuestionsFormsRegisters";

@Entity({ name: 'forms__questions' })
export default class FormsQuestions extends BaseEntity {
  @Column({ name: 'question', nullable: false, unique: true, length: 256 })
  question: string;

  @Column({ name: 'score', nullable: false, unique: false, type: 'int4range' })
  score: number[];

  @ManyToOne(() => FormsChoices, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'forms__choices_id' })
  choiceId: FormsChoices;

  @OneToMany(() => FormsQuestionsFormsQuestions, FQFQ => FQFQ.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'parents' })
  parents: FormsQuestionsFormsQuestions[]

  @OneToMany(() => FormsQuestionsFormsQuestions, FQFQ => FQFQ.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'children' })
  children: FormsQuestionsFormsQuestions[]

  @ManyToOne(() => FormsQuestionDomains, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'forms__question_domains_id' })
  formsQuestionDomainsId: FormsQuestionDomains;

  @OneToMany(() => FormsQuestionsFormsRegisters, FQFR => FQFR.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'forms__questions_forms__registers_id' })
  FormsQuestionsFormsRegistersId: FormsQuestionsFormsRegisters[]
}