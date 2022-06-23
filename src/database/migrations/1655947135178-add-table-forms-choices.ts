import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsChoices1655947135178 implements MigrationInterface {
    name = 'addTableFormsChoices1655947135178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__choices" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "items" character varying NOT NULL, "answer" character varying(256) NOT NULL, "forms__choice_types_id" integer NOT NULL, CONSTRAINT "PK_d07403d1f194caded8ebeaecbdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__choices" ADD CONSTRAINT "FK_977edcf82ce5b0bc5037130c69a" FOREIGN KEY ("forms__choice_types_id") REFERENCES "forms__choice_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choices" DROP CONSTRAINT "FK_977edcf82ce5b0bc5037130c69a"`);
        await queryRunner.query(`DROP TABLE "forms__choices"`);
    }

}
