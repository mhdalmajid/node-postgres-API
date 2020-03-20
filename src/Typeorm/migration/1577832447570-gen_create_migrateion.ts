import { MigrationInterface, QueryRunner } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class genCreateMigrateion1577832447570 implements MigrationInterface {
    name = 'genCreateMigrateion1577832447570';

    // eslint-disable-next-line class-methods-use-this
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(200) NOT NULL, "lastName" character varying(200) NOT NULL, "age" integer NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(250) NOT NULL, "jwtToken" character varying, "role" integer NOT NULL DEFAULT -1, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    // eslint-disable-next-line class-methods-use-this
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }
}
