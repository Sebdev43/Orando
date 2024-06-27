-- Verify orando:01-insertTables on pg

BEGIN;

SELECT id FROM "users" WHERE false;

SELECT id FROM "hikes" WHERE false;

SELECT id FROM "users_has_hikes" WHERE false;

ROLLBACK;
