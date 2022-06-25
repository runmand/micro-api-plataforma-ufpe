import {MigrationInterface, QueryRunner} from "typeorm";

export class addDomains1656188186342 implements MigrationInterface {
    name = 'addDomains1656188186342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__question_domains" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "cod" character varying(3) NOT NULL, "name" character varying(32) NOT NULL, CONSTRAINT "UQ_2608e020abcec420f605434f178" UNIQUE ("cod"), CONSTRAINT "UQ_21ab2c23a41a62ea294d539a4fc" UNIQUE ("name"), CONSTRAINT "PK_420060f6d9d6f9cb4963a878e8e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "forms__question_domains"`);
    }

}
