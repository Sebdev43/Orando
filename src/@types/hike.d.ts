interface Hike {
  id: number;
  title: string;
  photo: url;
  content: string;
  distance: number;
  time: number;
  difficulty: string;
  localisation: string;
  coords: GPS[];
}

interface GPS {
  lat: number;
  lng: number;
}
