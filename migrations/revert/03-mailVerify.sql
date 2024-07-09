-- Revert orando:03-mailVerify from pg

BEGIN;

ALTER TABLE "users" DROP COLUMN "email_verified";

COMMIT;
