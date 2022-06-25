import BaseEntity from "./BaseEntity";
import UsersRegisters from "./UsersRegisters";
import {
  Entity,
  Column,
  OneToMany,
  JoinColumn
} from "typeorm";

@Entity({ name: 'users__types' })
export default class UsersTypes extends BaseEntity {
  @Column({ name: 'description', nullable: false, unique: true, length: 32 })
  description: string;

  @OneToMany(() => UsersRegisters, register => register.id, { nullable: true, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'users' })
  users: UsersRegisters[];
}