import {MigrationInterface, QueryRunner} from "typeorm";

export class addBaseEntity1656187851477 implements MigrationInterface {
    name = 'addBaseEntity1656187851477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "BaseEntity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_9ea76dfa39526fec4b8f00e77cc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "BaseEntity"`);
    }

}
