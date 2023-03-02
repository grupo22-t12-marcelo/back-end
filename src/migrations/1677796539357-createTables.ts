import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677796539357 implements MigrationInterface {
    name = 'createTables1677796539357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" SET DEFAULT 'none'`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" SET DEFAULT 'none'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image6" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image5" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image4" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image3" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "imageProduct" ALTER COLUMN "image2" DROP DEFAULT`);
    }

}
