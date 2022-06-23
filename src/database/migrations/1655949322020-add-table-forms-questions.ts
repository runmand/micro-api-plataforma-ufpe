import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsQuestions1655949322020 implements MigrationInterface {
    name = 'addTableFormsQuestions1655949322020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "question" character varying(256) NOT NULL, "score" int4range NOT NULL, "forms__choices_id" integer NOT NULL, CONSTRAINT "UQ_7a331a75c522af088ce08709f43" UNIQUE ("question"), CONSTRAINT "PK_3dcace226aeac23b89f55a31a10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD CONSTRAINT "FK_3d247b8455cbebf7d5b3536b64f" FOREIGN KEY ("forms__choices_id") REFERENCES "forms__choices"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP CONSTRAINT "FK_3d247b8455cbebf7d5b3536b64f"`);
        await queryRunner.query(`DROP TABLE "forms__questions"`);
    }

}
