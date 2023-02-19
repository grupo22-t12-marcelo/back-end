import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("imageProduct")
class ImageProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @ManyToOne(() => Product)
  product: Product;
}

export { ImageProduct };
