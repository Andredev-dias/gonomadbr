import React, { useEffect, useRef, useState } from "react";
import {Container,InformationSection,MapBoxSection} from './styles';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A';

const ModalDataFromCards = () => {
  const mapContainer = useRef(null);
  const mapDiv = useRef<HTMLDivElement>(null);
  let [map, setMap] = useState(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const attachMap = (setMap: React.Dispatch<React.SetStateAction<any>>, mapDiv: React.RefObject<HTMLDivElement>) => {
      if (!mapDiv.current) {
        return;
      }
      const map = new mapboxgl.Map({
        container: mapDiv.current || '', 
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [-121.91390991210938, 40.316184625814095],
        zoom: 10,
      })
      setMap(map);
    }
  
    !map && attachMap(setMap, mapDiv)
  
  }, [map]);


  return(
       <Container>
        <InformationSection>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
          <h1>primeiro</h1>
        </InformationSection>
        <MapBoxSection>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <div ref={mapDiv} className="map-container" />
        </MapBoxSection>
       </Container>
    )
};
export default ModalDataFromCards;