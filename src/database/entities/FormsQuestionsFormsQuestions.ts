import BaseEntity from "./BaseEntity";
import {
  Entity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import FormsQuestions from "./FormsQuestions";

@Entity({ name: 'forms__questions_forms__questions' })
export default class FormsQuestionsFormsQuestions extends BaseEntity {
  @ManyToOne(() => FormsQuestions, { nullable: true, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'parent_id' })
  parentId: FormsQuestions;

  @ManyToOne(() => FormsQuestions, { nullable: true, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'child_id' })
  childId: FormsQuestions;
}