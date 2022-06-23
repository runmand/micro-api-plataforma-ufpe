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

@Entity({ name: 'forms__registers' })
export default class FormsRegisters extends BaseEntity {
  @Column({ name: 'title', nullable: false, unique: true, length: 64 })
  title: string;

  @Column({ name: 'message', nullable: true, default: null, length: 256 })
  message: string;

  // @ManyToOne(() => FormsChoiceTypes, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  // @JoinColumn({ name: 'forms__choice_types_id' })
  // typeId: FormsChoiceTypes;

  // @OneToMany(() => FormsQuestions, question => question.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  // @JoinColumn({ name: 'questions' })
  // questions: FormsQuestions[]
}