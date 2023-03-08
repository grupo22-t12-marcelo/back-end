import { MigrationInterface, QueryRunner } from "typeorm";

export class novo11678110043058 implements MigrationInterface {
    name = 'novo11678110043058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395"`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
