import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserAnswers1656188470229 implements MigrationInterface {
    name = 'addUserAnswers1656188470229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "answer" character varying(256) NOT NULL, "score" int4range NOT NULL, "user_id" integer NOT NULL, "form_question_id" integer NOT NULL, CONSTRAINT "PK_7d8e3c9cead04c2f06b3637d7d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_answers" ADD CONSTRAINT "FK_04f756bff40e82b74726ce29c6c" FOREIGN KEY ("user_id") REFERENCES "users__registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_answers" ADD CONSTRAINT "FK_882f78c351e43119de679ef74e9" FOREIGN KEY ("form_question_id") REFERENCES "forms__questions_forms__registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_answers" DROP CONSTRAINT "FK_882f78c351e43119de679ef74e9"`);
        await queryRunner.query(`ALTER TABLE "users_answers" DROP CONSTRAINT "FK_04f756bff40e82b74726ce29c6c"`);
        await queryRunner.query(`DROP TABLE "users_answers"`);
    }

}
