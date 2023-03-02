import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/users.entity";
import { Product } from "./entities/product.entity";
import { ImageProduct } from "./entities/imageProduct.entity";
import { Address } from "./entities/address.entity";
import { initialMigration1677774700393 } from "./migrations/1677774700393-initialMigration";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Product, ImageProduct],
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
    entities: [User, Product, ImageProduct, Address],
    migrations: [initialMigration1677774700393],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
