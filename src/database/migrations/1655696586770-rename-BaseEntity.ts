import {MigrationInterface, QueryRunner} from "typeorm";

export class renameBaseEntity1655696586770 implements MigrationInterface {
    name = 'renameBaseEntity1655696586770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_entity" RENAME TO "BaseEntity"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "BaseEntity_id_seq" OWNED BY "BaseEntity"."id"`);
        await queryRunner.query(`ALTER TABLE "BaseEntity" ALTER COLUMN "id" SET DEFAULT nextval('"BaseEntity_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "BaseEntity" RENAME TO "base_entity"`);
        await queryRunner.query(`ALTER TABLE "BaseEntity" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "BaseEntity_id_seq"`);
    }

}
