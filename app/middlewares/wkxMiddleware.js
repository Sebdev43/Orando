/**
 * Middleware pour transformer le champ gps_coordinate de GeoJSON string à JSON object
 * Postgres stocke les données de type géométrique en WKB (Well-Known Binary)
 * Ce middleware est optionnel car leaflet et map libre peuvent manipuler le Geojson
 */
export const gpsCoordinate = (req, res, next) => {
    /**
     * Fonction pour transformer un objet randonnée
     * @param {Object} hike - L'objet randonnée contenant le champ gps_coordinate
     * @returns {Object} - L'objet randonnée avec gps_coordinate transformé en JSON
     */
    const transformGps = (hike) => {
        if (hike.gps_coordinate) {
            hike.gps_coordinate = JSON.parse(hike.gps_coordinate);
        }
        return hike;
    };
     // Vérifier si res.locals.hikes est un tableau pour transformer chaque randonnée
    if (Array.isArray(res.locals.hikes)) {
        res.locals.hikes = res.locals.hikes.map(transformGps);
    } else if (res.locals.hike){
        // Transformer une seule randonnée
        res.locals.hike = transformGps(res.locals.hike);
    }
    next();
};