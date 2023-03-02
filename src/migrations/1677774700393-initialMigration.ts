import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1677774700393 implements MigrationInterface {
    name = 'initialMigration1677774700393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP CONSTRAINT "FK_9537ce066328b3798d26dd169c5"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image2" character varying`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image3" character varying`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image4" character varying`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image5" character varying`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image6" character varying`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD CONSTRAINT "UQ_9537ce066328b3798d26dd169c5" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD CONSTRAINT "FK_9537ce066328b3798d26dd169c5" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP CONSTRAINT "FK_9537ce066328b3798d26dd169c5"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP CONSTRAINT "UQ_9537ce066328b3798d26dd169c5"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image6"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image5"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image4"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image3"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image2"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" DROP COLUMN "image1"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ADD CONSTRAINT "FK_9537ce066328b3798d26dd169c5" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
