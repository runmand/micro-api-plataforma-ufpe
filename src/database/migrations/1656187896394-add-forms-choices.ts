import {MigrationInterface, QueryRunner} from "typeorm";

export class addFormsChoices1656187896394 implements MigrationInterface {
    name = 'addFormsChoices1656187896394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__choice_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "cod" character varying(3) NOT NULL, "name" character varying(32) NOT NULL, CONSTRAINT "UQ_944f17c89b07456769352382208" UNIQUE ("cod"), CONSTRAINT "UQ_f9181185644ec0ef5f0beba788a" UNIQUE ("name"), CONSTRAINT "PK_877cbd524f26438ffb87c24be13" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "forms__choice_types"`);
    }

}
