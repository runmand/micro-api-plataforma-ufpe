import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  JoinColumn,
  OneToMany
} from "typeorm";
import FormsQuestionsFormsRegisters from "./FormsQuestionsFormsRegisters";

@Entity({ name: 'forms__registers' })
export default class FormsRegisters extends BaseEntity {
  @Column({ name: 'title', nullable: false, unique: true, length: 64 })
  title: string;

  @Column({ name: 'message', nullable: true, default: null, length: 256 })
  message: string;

  @OneToMany(() => FormsQuestionsFormsRegisters, FQFR => FQFR.id, { nullable: false, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'forms__questions_forms__registers_id' })
  FormsQuestionsFormsRegistersId: FormsQuestionsFormsRegisters[]
}