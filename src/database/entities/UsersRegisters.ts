import UsersAdresses from "./UsersAdresses";
import UsersTypes from './UsersTypes';
import BaseEntity from "./BaseEntity";
import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import UsersAnswers from "./UsersAnswers";

@Entity({ name: 'users__registers' })
export default class UsersRegisters extends BaseEntity {
  @Column({ name: 'username', nullable: false, unique: true, length: 32 })
  username: string;

  @Column({ name: 'email', nullable: false, unique: true, length: 64 })
  email: string;

  @Column({ name: 'password', nullable: false, unique: false, select: false, length: 16 })
  password: string;

  @Column({ name: 'json_data', nullable: false, unique: false, type: 'jsonb' })
  jsonData: JSON;

  @ManyToOne(() => UsersTypes, { nullable: false, cascade: true, onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'type_id' })
  typeId: UsersTypes;

  @OneToMany(() => UsersAdresses, address => address.id, { nullable: false, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'adresses' })
  adresses: UsersAdresses[];

  @OneToMany(() => UsersAnswers, answer => answer.id, { nullable: true, cascade: true, onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'answers' })
  answers: UsersAnswers[];
}