import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: number

  @Column()
  name: string

  @Exclude()
  @Column()
  password: string

  @Column()
  salary: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export {User}