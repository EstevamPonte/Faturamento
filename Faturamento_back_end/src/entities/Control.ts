import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('control')
class Control {
  
  @PrimaryGeneratedColumn('increment')
  readonly id: number

  @Column()
  name: string
}

export {Control}