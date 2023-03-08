import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./entities/address.entity";
import { Comment } from "./entities/comment.entity";
import { ImageProduct } from "./entities/imageProduct.entity";
import { Product } from "./entities/product.entity";
import { User } from "./entities/users.entity";
import { novo11678110043058 } from "./migrations/1678110043058-novo1";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Product, ImageProduct, Address, Comment],
    };
  }

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [User, Product, ImageProduct, Address, Comment],
      migrations: [novo11678110043058],
    };
  }

  return {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [User, Product, ImageProduct, Address, Comment],
    migrations: [novo11678110043058],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
