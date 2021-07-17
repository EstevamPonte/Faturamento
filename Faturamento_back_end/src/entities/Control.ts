import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('control')
class Control {
  
  @PrimaryColumn()
  readonly id: number

  @Column()
  name: string
}

export {Control}