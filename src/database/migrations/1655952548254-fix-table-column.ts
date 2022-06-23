import {MigrationInterface, QueryRunner} from "typeorm";

export class fixTableColumn1655952548254 implements MigrationInterface {
    name = 'fixTableColumn1655952548254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choices" DROP COLUMN "items"`);
        await queryRunner.query(`ALTER TABLE "forms__choices" ADD "items" character varying array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choices" DROP COLUMN "items"`);
        await queryRunner.query(`ALTER TABLE "forms__choices" ADD "items" character varying NOT NULL`);
    }

}
