import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity('status')
class Status {	
  
  @PrimaryGeneratedColumn('increment')
  readonly id: number

  @Column()
  name: string

}

export {Status}