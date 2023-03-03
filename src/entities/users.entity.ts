import { Exclude } from "class-transformer";
import {
  Column, CreateDateColumn, Entity, JoinColumn, OneToMany,
  OneToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { Address } from "./address.entity";
import { Comment } from "./comment.entity";
import { Product } from "./product.entity";

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

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @OneToMany(() => Product, (product) => product.user, { eager: true })
  products: Product[];

  @OneToMany(() => Comment, (comment) => comment.user, {
  eager: true,
  })
  comments: Comment[];

}

export { User };

