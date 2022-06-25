import {MigrationInterface, QueryRunner} from "typeorm";

export class addRecommentationMessage1656189425470 implements MigrationInterface {
    name = 'addRecommentationMessage1656189425470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" ADD "recommendation_message" character varying(256)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms__questions" DROP COLUMN "recommendation_message"`);
    }

}
