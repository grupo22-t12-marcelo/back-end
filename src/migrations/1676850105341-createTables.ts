import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676850105341 implements MigrationInterface {
    name = 'createTables1676850105341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type_announcement" character varying NOT NULL, "title" character varying NOT NULL, "year" integer NOT NULL, "kilometers" integer NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, "type_vehicle" character varying NOT NULL, "image" character varying NOT NULL, "is_published" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imageProduct" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_3115573fd248828575fda62a9bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD CONSTRAINT "FK_9537ce066328b3798d26dd169c5" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP CONSTRAINT "FK_9537ce066328b3798d26dd169c5"`);
        await queryRunner.query(`DROP TABLE "imageProduct"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
