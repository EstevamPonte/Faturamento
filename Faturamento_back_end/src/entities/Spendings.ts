import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('spendings')
class Spendings {

  @PrimaryColumn()
  readonly id: number

  @Column()
  name: string

  @Column()
  total: number

  @CreateDateColumn()
  date_created: Date

  @Column()
  user_reference: number
  
}

export {Spendings}