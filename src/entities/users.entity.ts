import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Product } from "./product.entity";
import { Address } from "./address.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  phone: string;

  @Column()
  birthdate: Date;

  @Column()
  description: string;

  @Column()
  type_account: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, {eager: true})
  @JoinColumn()
  address: Address;

  @OneToMany(() => Product, (product) => product.user, {
    eager: true,
  })
  products: Product[];
}

export { User };
