import { useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

import { leftEndPosition, nearestStation } from '../configs/placeConfig';

export type GoogleMap = google.maps.Map;

type UseGoogleMapProps = {
  defaultPosition: google.maps.LatLngLiteral;
};

export const useGoogleMap = (props: UseGoogleMapProps) => {
  const { defaultPosition } = props;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map',
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState<GoogleMap | null>(null);

  const onLoad = (map: GoogleMap) => {
    const bounds = new window.google.maps.LatLngBounds(defaultPosition);
    bounds.extend(nearestStation);
    bounds.extend(leftEndPosition);
    map.fitBounds(bounds);
    setMap(map);
  };

  return { map, isLoaded, onLoad };
};
