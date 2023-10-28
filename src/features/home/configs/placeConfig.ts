export const weddingPlace = {
  lat: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_WEDDING_PLACE_LAT),
  lng: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_WEDDING_PLACE_LNG),
};

export const nearestStation = {
  lat: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_NEAREST_STATION_PLACE_LAT),
  lng: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_NEAREST_STATION_PLACE_LNG),
};

export const leftEndPosition = {
  lat: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_LEFT_END_LAT),
  lng: parseFloat(import.meta.env.VITE_APP_GOOGLE_MAPS_LEFT_END_LNG),
};
