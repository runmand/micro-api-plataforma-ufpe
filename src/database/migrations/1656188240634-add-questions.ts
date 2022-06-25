import {MigrationInterface, QueryRunner} from "typeorm";

export class addQuestions1656188240634 implements MigrationInterface {
    name = 'addQuestions1656188240634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms__questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "question" character varying(256) NOT NULL, "score" int4range NOT NULL, "choice_id" integer NOT NULL, "domains_id" integer NOT NULL, CONSTRAINT "UQ_7a331a75c522af088ce08709f43" UNIQUE ("question"), CONSTRAINT "PK_3dcace226aeac23b89f55a31a10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD CONSTRAINT "FK_4177033e4e5c1be65405e4e586b" FOREIGN KEY ("choice_id") REFERENCES "forms__choices"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD CONSTRAINT "FK_31560860144bc98bcc00dfb97dc" FOREIGN KEY ("domains_id") REFERENCES "forms__question_domains"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP CONSTRAINT "FK_31560860144bc98bcc00dfb97dc"`);
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP CONSTRAINT "FK_4177033e4e5c1be65405e4e586b"`);
        await queryRunner.query(`DROP TABLE "forms__questions"`);
    }

}
