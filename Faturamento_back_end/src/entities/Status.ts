import { Entity, Column, PrimaryColumn } from 'typeorm'


@Entity('status')
class Status {	
  
  @PrimaryColumn()
  readonly id: number

  @Column()
  name: string

}

export {Status}