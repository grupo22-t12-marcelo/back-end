import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";
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

  @OneToOne(() => ImageProduct, (images) => images.product, { eager: true })
  imagesGallery: ImageProduct;

  @Exclude()
  @ManyToOne(() => User, (user) => user.products, { onDelete: "CASCADE" })
  user: User;
}

export { Product };
