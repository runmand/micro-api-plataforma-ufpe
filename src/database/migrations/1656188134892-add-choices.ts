import {MigrationInterface, QueryRunner} from "typeorm";

export class addChoices1656188134892 implements MigrationInterface {
    name = 'addChoices1656188134892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__choices" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "items" character varying array NOT NULL, "answer" character varying(256) NOT NULL, "type_id" integer NOT NULL, CONSTRAINT "PK_d07403d1f194caded8ebeaecbdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__choices" ADD CONSTRAINT "FK_88d50fa23204b62ffcb33a5e93c" FOREIGN KEY ("type_id") REFERENCES "forms__choice_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__choices" DROP CONSTRAINT "FK_88d50fa23204b62ffcb33a5e93c"`);
        await queryRunner.query(`DROP TABLE "forms__choices"`);
    }

}
