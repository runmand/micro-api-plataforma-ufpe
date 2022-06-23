import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsRegisters1655951832156 implements MigrationInterface {
    name = 'addTableFormsRegisters1655951832156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__questions_forms__registers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "form_id" integer NOT NULL, "question_id" integer NOT NULL, CONSTRAINT "PK_da94afe471d46bd53c9dd6041ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__registers" ADD CONSTRAINT "FK_0aaef4f455906ce32935f99db88" FOREIGN KEY ("form_id") REFERENCES "forms__registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__registers" ADD CONSTRAINT "FK_97eeec49a803c9cc962c4445352" FOREIGN KEY ("question_id") REFERENCES "forms__questions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__registers" DROP CONSTRAINT "FK_97eeec49a803c9cc962c4445352"`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__registers" DROP CONSTRAINT "FK_0aaef4f455906ce32935f99db88"`);
        await queryRunner.query(`DROP TABLE "forms__questions_forms__registers"`);
    }

}
