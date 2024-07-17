import NodeCache from "node-cache";

const cache = new NodeCache();

//Fonction pour révoquer un token avec une durée de vie 

export const revokeToken =  (token, ttl= 3600) => {// TTL de 1 heure par défaut
 cache.set(token, true, ttl);    
};


//Fonction pour vérifier si un token a été révoqué

export const isTokenRevoked = (token) => {
    return cache.get(token) === true;
};