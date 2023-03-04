import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1677848576560 implements MigrationInterface {
  name = "initialMigration1677848576560";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "productId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image2" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image3" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image4" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image5" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image6" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395"`
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image6" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image5" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image4" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image3" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "imageProduct" ALTER COLUMN "image2" DROP NOT NULL`
    );
    await queryRunner.query(`DROP TABLE "comment"`);
  }
}
