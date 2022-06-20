import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableUsers_types1655690167601 implements MigrationInterface {
    name = 'addTableUsers_types1655690167601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users__types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "description" character varying(32) NOT NULL, CONSTRAINT "UQ_065a71de9a51bcd13b3af5f8287" UNIQUE ("description"), CONSTRAINT "PK_74f13f294ecf186f102743a4612" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users__types"`);
    }

}
