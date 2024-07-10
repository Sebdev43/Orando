-- Deploy orando:04-Constraint to pg

BEGIN;

ALTER TABLE "users_has_hikes" ADD CONSTRAINT unique_user_hike UNIQUE ("users_id", "hikes_id");


COMMIT;
