import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './User'
import { Itens } from './Itens'
import { Status } from './Status'

@Entity('spendings')
class Spendings {

  @PrimaryGeneratedColumn('increment')
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
  
  @OneToMany(() => Itens, item => item.spendingId, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'spending_id'})
  itens: Itens[]
  
}

export {Spendings}