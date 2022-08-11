import React, { useEffect, useRef, useState } from "react";
import {IconMapNav,WrapCard,Cards,NavigationMap,Map, Climate,Container,InformationSection,MapBoxSection, styleModal , MapViewBtns, BtnViewSat, BtnViewLight, BtnViewStreet} from './styles';

// imports do mapa
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
import MapGl, { NavigationControl } from "react-map-gl";
// Import interfaces
import { IMap } from "./interfaces";
import 'mapbox-gl/dist/mapbox-gl.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FullMap from "../FullMap";
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
  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  const [zoom, setZoom] = useState(props.zoom);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [viewport, setViewport] = useState<any>({
    latitude: lat,
    longitude: lng,
    zoom: props.zoom,
  });

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

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return(
    <>
   <Modal
    open={openModal}
    onClose={handleCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={styleModal}>
      <NavigationMap>
          <FullMap lng={props.lng} lat={props.lat} zoom={props.zoom} mapTheme={mapTheme}/>
      </NavigationMap>
    </Box>
  </Modal>
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
        <MapBoxSection >
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <MapViewBtns>
          <BtnViewSat isSattelite={isSattelite} onClick={handleMapViewSat}>Satelite</BtnViewSat>
          <BtnViewLight isLight={isLight} onClick={handleMapViewLight}>Light</BtnViewLight>
          <BtnViewStreet isStreet={isStreet} onClick={handleMapViewStrees}>Streets</BtnViewStreet>
          <IconMapNav onClick={handleOpenModal}/>
        </MapViewBtns>
             <MapGl
             {...viewport}
              width="100%"
              height="100%"
              onViewportChange={setViewport}
              mapStyle={`mapbox://styles/mapbox/${mapTheme}`}
              mapboxApiAccessToken={'pk.eyJ1IjoiZGVjb3NhbXVyYXkiLCJhIjoiY2w2bGJ0ZTU0MGE4NDNkbXJxaTFoaWhicyJ9.E7suFxe03-TU6SE0z_Rb9A'}>
            </MapGl>
        </MapBoxSection>
       </Container>
       </>
    )
};
export default ModalDataFromCards;