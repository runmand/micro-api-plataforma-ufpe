import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsersAdresses1656188006565 implements MigrationInterface {
    name = 'addUsersAdresses1656188006565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users__adresses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "zipcode" character varying(9), "street" character varying(32) NOT NULL, "city" character varying(20) NOT NULL, "district" character varying(20) NOT NULL, "complement" character varying(32), CONSTRAINT "PK_16181bf0d1a5c6cc3420e169c6e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users__adresses"`);
    }

}
