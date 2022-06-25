import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRelations1656188091463 implements MigrationInterface {
    name = 'fixRelations1656188091463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users__adresses" ADD CONSTRAINT "FK_677f16075d24b72a04b90966af7" FOREIGN KEY ("user_id") REFERENCES "users__registers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP CONSTRAINT "FK_677f16075d24b72a04b90966af7"`);
        await queryRunner.query(`ALTER TABLE "users__adresses" DROP COLUMN "user_id"`);
    }

}
