import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Control } from './Control'
import { Spendings } from './Spendings'
import { Status } from './Status'
import { Exclude } from 'class-transformer'

@Entity('itens')
class Itens {
  @PrimaryGeneratedColumn('increment')
  readonly id: number

  @Column()
  name: string

  @Column()
  instellment?: number

  @Column()
  value: number

  @Column()
  final_installment: Date

  @CreateDateColumn()
  date_created: Date

  @Exclude()
  @Column()
  status_id: number

  @Exclude()
  @Column()
  control_id: number

  @Exclude()
  @Column()
  spending_id: number

  @JoinColumn({name: 'status_id'})
  @ManyToOne(() => Status)
  status: Status

  @JoinColumn({name: 'control_id'})
  @ManyToOne(() => Control)
  control: Control
  
  @ManyToOne(() => Spendings, spending => spending.itens)
  @JoinColumn({name: 'spending_id'})
  spendingId: Spendings
}

export {Itens}