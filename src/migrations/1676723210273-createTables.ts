import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676723210273 implements MigrationInterface {
    name = 'createTables1676723210273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type_announcement" character varying NOT NULL, "title" character varying NOT NULL, "year" integer NOT NULL, "kilometers" integer NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, "type_vehicle" character varying NOT NULL, "image" character varying NOT NULL, "is_published" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
