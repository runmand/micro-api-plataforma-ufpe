import {MigrationInterface, QueryRunner} from "typeorm";

export class fixTableFormsChoiceTypes1655949889127 implements MigrationInterface {
    name = 'fixTableFormsChoiceTypes1655949889127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choice_types" ADD "name" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms__choice_types" ADD CONSTRAINT "UQ_f9181185644ec0ef5f0beba788a" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choice_types" DROP CONSTRAINT "UQ_f9181185644ec0ef5f0beba788a"`);
        await queryRunner.query(`ALTER TABLE "forms__choice_types" DROP COLUMN "name"`);
    }

}
