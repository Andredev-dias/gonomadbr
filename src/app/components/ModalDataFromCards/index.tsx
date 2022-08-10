import React, { useEffect, useRef, useState } from "react";
import {WrapCard,Cards, Climate,Container,InformationSection,MapBoxSection, MapViewBtns, BtnViewSat, BtnViewLight, BtnViewStreet} from './styles';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// Import interfaces
import { IMap } from "./interfaces";
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A';

/**
 * Parâmetros do componente
 * @param lng longitude
 * @param lat latitude
 * @param zoom zoom do mapa 6 de longe, 20 mais perto
 */
const ModalDataFromCards = (props: IMap) => {
  const [isSattelite, setIsSattelite] = useState(false);
  const [isStreet, setIsStreet] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mapTheme, setMapTheme] = useState<string>("satellite-streets-v11");
  const mapDiv = useRef<HTMLDivElement>(null);
  let [map, setMap] = useState(null);
  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  const [zoom, setZoom] = useState(props.zoom);

  useEffect(() => {
    const attachMap = (setMap: React.Dispatch<React.SetStateAction<any>>, mapDiv: React.RefObject<HTMLDivElement>) => {
      if (!mapDiv.current) {
        return;
      }
      const map = new mapboxgl.Map(
        {
        container: mapDiv.current || '', 
        style:`mapbox://styles/mapbox/${mapTheme}`,
        center: [lng, lat],
        zoom: props.zoom,
        }
      )
      setMap(map);
    }
  
    !map && attachMap(setMap, mapDiv)
  
  }, [map, mapTheme]);
  
  const handleMapViewSat = () => {
    setIsSattelite(true);
    setIsStreet(false);
    setIsLight(false);
    setMapTheme("satellite-streets-v11")
  };

  const handleMapViewLight = () => {
    setIsSattelite(false);
    setIsStreet(false);
    setIsLight(true);
    setMapTheme("light-v10")
  };

  const handleMapViewStrees = () => {
    setIsSattelite(false);
    setIsStreet(true);
    setIsLight(false);
    setMapTheme("streets-v11")
  };

  console.log(mapTheme)

  return(
       <Container>
        <InformationSection>
        <Cards>
          <WrapCard>
            {props.IconInfo}
            <h5>{props.infoLabel}</h5>
            <progress value={props.infoValue} max={100}></progress>
            <p>{props.infoValue}</p>
          </WrapCard>
        </Cards>
        <Climate>
          <p>{props.infoTemp}</p>
          <h1>Temperatura</h1>
        </Climate>
        </InformationSection>
        <MapBoxSection>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <MapViewBtns>
          <BtnViewSat isSattelite={isSattelite} onClick={handleMapViewSat}>Satelite</BtnViewSat>
          <BtnViewLight isLight={isLight} onClick={handleMapViewLight}>Light</BtnViewLight>
          <BtnViewStreet isStreet={isStreet} onClick={handleMapViewStrees}>Streets</BtnViewStreet>
        </MapViewBtns>
        <div ref={mapDiv} className="map-container" />
        </MapBoxSection>
       </Container>
    )
};
export default ModalDataFromCards;