import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsQuestionDomains1655950844185 implements MigrationInterface {
    name = 'addTableFormsQuestionDomains1655950844185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__question_domains" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "cod" character varying(3) NOT NULL, "name" character varying(32) NOT NULL, CONSTRAINT "UQ_2608e020abcec420f605434f178" UNIQUE ("cod"), CONSTRAINT "UQ_21ab2c23a41a62ea294d539a4fc" UNIQUE ("name"), CONSTRAINT "PK_420060f6d9d6f9cb4963a878e8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD "forms__question_domains_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD CONSTRAINT "FK_5293fdde9a75a158b2d5f6adb7d" FOREIGN KEY ("forms__question_domains_id") REFERENCES "forms__question_domains"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP CONSTRAINT "FK_5293fdde9a75a158b2d5f6adb7d"`);
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP COLUMN "forms__question_domains_id"`);
        await queryRunner.query(`DROP TABLE "forms__question_domains"`);
    }

}
