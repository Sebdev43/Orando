-- Revert orando:01-insertTables from pg

BEGIN;

DROP TABLE IF EXISTS "users_has_hikes","users","hikes";

DROP DOMAIN IF EXISTS "email";

COMMIT;
