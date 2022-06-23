import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsRegisters1655951139367 implements MigrationInterface {
    name = 'addTableFormsRegisters1655951139367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__registers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "title" character varying(64) NOT NULL, "message" character varying(256), CONSTRAINT "UQ_497ad28b880b213d5a263edf949" UNIQUE ("title"), CONSTRAINT "PK_ebd7177aabe91c4564a3455212e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "forms__registers"`);
    }

}
