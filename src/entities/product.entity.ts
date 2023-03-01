import {
  Column,
  CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { Comment } from "./comment.entity";
import { ImageProduct } from "./imageProduct.entity";
import { User } from "./users.entity";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type_announcement: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  kilometers: number;

  @Column("float")
  price: number;

  @Column()
  description: string;

  @Column()
  type_vehicle: string;

  @Column()
  image: string;

  @Column({ default: true })
  is_published: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ImageProduct, (images) => images.product)
  images: ImageProduct[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.product, {
  eager: true,
  })
  comments: Comment[];

}

export { Product };

