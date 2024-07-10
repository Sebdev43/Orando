-- Revert orando:04-Constraint from pg

BEGIN;

ALTER TABLE "users_has_hikes" DROP CONSTRAINT unique_user_hike;


COMMIT;
