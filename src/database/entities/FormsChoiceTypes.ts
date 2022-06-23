import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  OneToMany,
  JoinColumn
} from "typeorm";
// import FormsChoices from "./FormsChoices";

@Entity({ name: 'forms__choice_types' })
export default class FormsChoiceTypes extends BaseEntity {
  @Column({ name: 'cod', nullable: false, unique: true, length: 3 })
  cod: string;

  // @OneToMany(() => FormsChoices, choice => choice.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  // @JoinColumn({ name: 'choices' })
  // choices: FormsChoices[]
}