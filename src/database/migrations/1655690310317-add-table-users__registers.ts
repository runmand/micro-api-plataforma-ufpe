import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableUsers_registers1655690310317 implements MigrationInterface {
    name = 'addTableUsers_registers1655690310317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users__registers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "username" character varying(32) NOT NULL, "email" character varying(64) NOT NULL, "password" character varying(16) NOT NULL, "json_data" jsonb NOT NULL, "type_id" integer NOT NULL, CONSTRAINT "UQ_2cb482b246246e0994697c51900" UNIQUE ("username"), CONSTRAINT "UQ_242822ff9dbc916f8c1240c9116" UNIQUE ("email"), CONSTRAINT "PK_bb32fafaf517628697ecb4e7197" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD "users__registers_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users__registers" ADD CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff" FOREIGN KEY ("type_id") REFERENCES "users__types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD CONSTRAINT "FK_e7db2beb8760fa684b589f8641d" FOREIGN KEY ("users__registers_id") REFERENCES "users__registers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP CONSTRAINT "FK_e7db2beb8760fa684b589f8641d"`);
        await queryRunner.query(`ALTER TABLE "users__registers" DROP CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff"`);
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP COLUMN "users__registers_id"`);
        await queryRunner.query(`DROP TABLE "users__registers"`);
    }

}
