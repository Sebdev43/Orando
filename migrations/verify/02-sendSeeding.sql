-- Verify orando:02-sendSeeding on pg

BEGIN;
-- Verify orando:01-insertTables on pg
SELECT id FROM "users_has_hikes" WHERE false;

SELECT id FROM "users" WHERE false;

SELECT id FROM "hikes" WHERE false;



ROLLBACK;
