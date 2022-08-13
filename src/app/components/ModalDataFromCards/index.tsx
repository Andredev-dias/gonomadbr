import React, { useEffect, useRef, useState } from "react";
import {RowDivs,
  IconMapNav,
  WrapCard,
  Cards,
  NavigationMap,
  Map, 
  Climate,
  Container,
  InformationSection,
  MapBoxSection,
   styleModal ,
    MapViewBtns,
     BtnViewSat,
      BtnViewLight,
       BtnViewStreet,
       IconWeatherSun,
       IconWeatherStormy,
       IconWeatherPar,
       IconWeatherCold,
       WrapIconAndValue,
       TempValueAside,
       LabelAside,
       IconWifi
      } from './styles';

// imports internos
import InfoLines from "../InfoLines";
import Charts from "../Charts";
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
     <div data-theme={props.theme}>
   <Modal
    open={openModal}
    onClose={handleCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    keepMounted
  >
    <Box sx={styleModal}>
      <NavigationMap>
          <FullMap lng={props.lng} lat={props.lat} zoom={props.zoom} mapTheme={mapTheme}/>
      </NavigationMap>
    </Box>
  </Modal>
    <Container>
        <InformationSection>
          <RowDivs>
        <Cards>
           <InfoLines
            infoValueCost={props.infoValueCost}
             infoLabelCost={props.infoLabelCost}
              infoLabelSec={props.infoLabelSec}
               infoValueSec={props.infoValueSec}
               infoLabelTrans={props.infoLabelTrans}
               infoValueTrans={props.infoValueTrans}
                infoLabelCul={props.infoLabelCul}
               infoValueCul={props.infoValueCul}
               />
        </Cards>
        <Climate>
        <WrapIconAndValue>
         {props.infoTemp && props.infoTemp > 25 && <IconWeatherSun/>}
         {props.infoTemp && props.infoTemp <= 25 && props.infoTemp > 16 && <IconWeatherPar/>}
         {props.infoTemp && props.infoTemp <= 16 && props.infoTemp > 12 && <IconWeatherStormy/>}
         {props.infoTemp && props.infoTemp <= 12 && <IconWeatherCold/>}
          <TempValueAside>{props.infoTemp} <h4 style={{color: "#8884d8"}}>{localStorage.getItem("language") === "pt-BR" ? "°C" : "°F"}</h4> </TempValueAside>
        </WrapIconAndValue>
        <LabelAside>Temperatura</LabelAside>
        <WrapIconAndValue>
          <h4 style={{color: "#8884d8"}}>{localStorage.getItem("language") === "pt-BR" ? "R$" : "US$"}</h4> 
          <TempValueAside>{props.cost}</TempValueAside>
        </WrapIconAndValue>
        <LabelAside>Custo de Vida</LabelAside>
        <IconWifi/>
          <TempValueAside>{props.wifi}</TempValueAside>
        <LabelAside>Wi-Fi</LabelAside>
        </Climate>
        </RowDivs>
          <Charts/>
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
       </div>
       </>
    )
};
export default ModalDataFromCards;