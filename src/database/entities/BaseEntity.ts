import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import { ID } from "../../types";

@Entity({ name: 'BaseEntity' })
export default class BaseEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'deleted_at' })
  deletedAt: Date
}