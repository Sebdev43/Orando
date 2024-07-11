import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.scss';

type GeoDatasProps = {
  geoDatas: string;
};

export default function Map({ geoDatas }: GeoDatasProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style:
        'https://api.maptiler.com/maps/bright/style.json?key=lKoHqTSlrjjlLkJx0OIm',
      center: [-0.187961, 45.03991],
      zoom: 12,
    });

    map.on('load', () => {
      try {
        const parsedData = JSON.parse(geoDatas);

        map.addSource('route', {
          type: 'geojson',
          data: parsedData,
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#0000FF',
            'line-width': 5,
          },
        });

        // Zoom and center the map to fit the route
        const coordinates = parsedData.coordinates;
        const bounds = coordinates.reduce(
          (bounds: any, coord: any) => {
            return bounds.extend(coord);
          },
          new maplibregl.LngLatBounds(coordinates[0], coordinates[0])
        );

        map.fitBounds(bounds, {
          padding: 20,
        });
      } catch (error) {
        console.error('Invalid GeoJSON data', error);
      }
    });

    return () => map.remove();
  }, [geoDatas]);

  return (
    <div className="map-wrapper">
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
}
