-- Deploy orando:03-mailVerify to pg

BEGIN;

ALTER TABLE "users" ADD COLUMN "email_verified" BOOLEAN DEFAULT FALSE NOT NULL;

COMMIT;
