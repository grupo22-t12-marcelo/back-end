import { MigrationInterface, QueryRunner } from "typeorm";

export class novo1677697488551 implements MigrationInterface {
    name = 'novo1677697488551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_bafb08f60d7857f4670c172a6e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "UQ_d25f1ea79e282cc8a42bd616aa3" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "UQ_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
