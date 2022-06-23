import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFormsChoiceTypes1655946589906 implements MigrationInterface {
    name = 'addTableFormsChoiceTypes1655946589906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users__registers" DROP CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff"`);
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP CONSTRAINT "FK_e7db2beb8760fa684b589f8641d"`);
        await queryRunner.query(`CREATE TABLE "forms__choice_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "cod" character varying(3) NOT NULL, CONSTRAINT "UQ_944f17c89b07456769352382208" UNIQUE ("cod"), CONSTRAINT "PK_877cbd524f26438ffb87c24be13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users__registers" ADD CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff" FOREIGN KEY ("type_id") REFERENCES "users__types"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD CONSTRAINT "FK_e7db2beb8760fa684b589f8641d" FOREIGN KEY ("users__registers_id") REFERENCES "users__registers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP CONSTRAINT "FK_e7db2beb8760fa684b589f8641d"`);
        await queryRunner.query(`ALTER TABLE "users__registers" DROP CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff"`);
        await queryRunner.query(`DROP TABLE "forms__choice_types"`);
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD CONSTRAINT "FK_e7db2beb8760fa684b589f8641d" FOREIGN KEY ("users__registers_id") REFERENCES "users__registers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users__registers" ADD CONSTRAINT "FK_93ef0a4ec476e75f03b8517a6ff" FOREIGN KEY ("type_id") REFERENCES "users__types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
