
BEGIN;
-- Vérifier l'existence du domaine "email"
SELECT 1
FROM pg_type
WHERE typname = 'email';

-- Vérifier l'existence des tables
SELECT 1
FROM information_schema.tables
WHERE table_name = 'users';

SELECT 1
FROM information_schema.tables
WHERE table_name = 'hikes';

SELECT 1
FROM information_schema.tables
WHERE table_name = 'users_has_hikes';

ROLLBACK;
