import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsQuestionsParents1655949425752 implements MigrationInterface {
    name = 'addTableFormsQuestionsParents1655949425752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__questions_forms__questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "parent_id" integer, "child_id" integer, CONSTRAINT "PK_36ae511fb330160e1a196ea22c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__questions" ADD CONSTRAINT "FK_526bda652fc3abcdcb12259861a" FOREIGN KEY ("parent_id") REFERENCES "forms__questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__questions" ADD CONSTRAINT "FK_d2efac6fa816fcd8043a17b2f1c" FOREIGN KEY ("child_id") REFERENCES "forms__questions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__questions" DROP CONSTRAINT "FK_d2efac6fa816fcd8043a17b2f1c"`);
        await queryRunner.query(`ALTER TABLE "forms__questions_forms__questions" DROP CONSTRAINT "FK_526bda652fc3abcdcb12259861a"`);
        await queryRunner.query(`DROP TABLE "forms__questions_forms__questions"`);
    }

}
