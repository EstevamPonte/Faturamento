import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { User } from './User'

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

  @JoinColumn({name: 'user_reference'})
  @ManyToOne(() => User)
  userReference: User
  
}

export {Spendings}