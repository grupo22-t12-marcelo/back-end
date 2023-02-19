import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ImageProduct } from "./imageProduct.entity";

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
}

export { Product };