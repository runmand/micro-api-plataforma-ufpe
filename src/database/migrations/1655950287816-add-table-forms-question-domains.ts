import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsQuestionDomains1655950287816 implements MigrationInterface {
    name = 'addTableFormsQuestionDomains1655950287816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD "forms__question_domains_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD CONSTRAINT "FK_5293fdde9a75a158b2d5f6adb7d" FOREIGN KEY ("forms__question_domains_id") REFERENCES "forms__choice_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP CONSTRAINT "FK_5293fdde9a75a158b2d5f6adb7d"`);
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP COLUMN "forms__question_domains_id"`);
    }

}
