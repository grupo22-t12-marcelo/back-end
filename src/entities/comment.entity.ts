import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./users.entity";

@Entity()
class Comment {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    comment: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @ManyToOne(type => Product, product => product.comments)
    product: Product;

}

export { Comment };

