-- Verify orando:04-Constraint on pg

BEGIN;

-- Essayez d'ajouter un enregistrement en double
INSERT INTO "users_has_hikes" ("users_id", "hikes_id") VALUES (1, 1);
INSERT INTO "users_has_hikes" ("users_id", "hikes_id") VALUES (1, 1);

-- Si l'insertion réussit, annulez la transaction et levez une erreur
ROLLBACK;
RAISE EXCEPTION 'Constraint unique_user_hike is not enforced properly';

EXCEPTION WHEN unique_violation THEN
-- Si une contrainte d'unicité est violée, cela signifie que la contrainte fonctionne
ROLLBACK;
END;
