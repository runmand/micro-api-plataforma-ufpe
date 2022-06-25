import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import FormsChoiceTypes from "./FormsChoiceTypes";
import FormsQuestions from "./FormsQuestions";

@Entity({ name: 'forms__choices' })
export default class FormsChoices extends BaseEntity {
  @Column({ name: 'items', nullable: false, unique: false, array: true, type: 'character varying' })
  items: string[];

  @Column({ name: 'answer', nullable: false, unique: false, length: 256 })
  answer: string;

  @ManyToOne(() => FormsChoiceTypes, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'type_id' })
  typeId: FormsChoiceTypes;

  @OneToMany(() => FormsQuestions, question => question.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'questions' })
  questions: FormsQuestions[]
}