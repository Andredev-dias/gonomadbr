import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// Import interfaces
import { IMap } from './interfaces';
mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A';
const FullMap = (props: IMap) => {
  const mapDiv = useRef<HTMLDivElement>(null);
  let [map, setMap] = useState(null);

  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  console.log(props);
  useEffect(() => {
    const attachMap = (
      setMap: React.Dispatch<React.SetStateAction<any>>,
      mapDiv: React.RefObject<HTMLDivElement>
    ) => {
      if (!mapDiv.current) {
        return;
      }
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: `mapbox://styles/mapbox/${props.mapTheme}`,
        center: [lng, lat],
        zoom: 5,
      });
      setMap(map);
    };

    !map && attachMap(setMap, mapDiv);
  }, [map, props.mapTheme]);

  return (
    <Container>
      <div ref={mapDiv} className="map-container" />
    </Container>
  );
};
export default FullMap;
