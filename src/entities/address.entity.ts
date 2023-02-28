import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne
  } from "typeorm";
  
  @Entity()
  class Address {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @Column()
    zipCode: string;
  
    @Column()
    state: string;
  
    @Column()
    city: string
  
    @Column()
    road: string
  
    @Column()
    number: string
  
    @Column()
    complement: string
  
  }
  
  export { Address }
  