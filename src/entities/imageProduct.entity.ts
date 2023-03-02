import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity("imageProduct")
class ImageProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image1: string;

  @Column({ nullable: true })
  image2: string;

  @Column({ nullable: true })
  image3: string;

  @Column({ nullable: true })
  image4: string;

  @Column({ nullable: true })
  image5: string;

  @Column({ nullable: true })
  image6: string;

  @OneToOne(() => Product, (product) => product.imagesGallery, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  product: Product;
}

export { ImageProduct };
