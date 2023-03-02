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

  @Column({ default: "none" })
  image2: string;

  @Column({ default: "none" })
  image3: string;

  @Column({ default: "none" })
  image4: string;

  @Column({ default: "none" })
  image5: string;

  @Column({ default: "none" })
  image6: string;

  @OneToOne(() => Product, (product) => product.imagesGallery, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  product: Product;
}

export { ImageProduct };
