import styled, { css } from 'styled-components';
import { SiOpenstreetmap } from 'react-icons/si';
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherSnow,
} from 'react-icons/ti';
import { FaWifi } from 'react-icons/fa';
interface IBtns {
  isSattelite?: boolean;
  isStreet?: boolean;
  isLight?: boolean;
}

const IconMapWeather = css`
  width: 6rem;
  height: 6rem;
  background-color: var(--lightBackground);
  border-radius: 10px;
  color: var(--primary);
`;

export const IconWeatherSun = styled(TiWeatherSunny)`
  ${IconMapWeather};
`;
export const IconWeatherStormy = styled(TiWeatherStormy)`
  ${IconMapWeather};
`;
export const IconWeatherPar = styled(TiWeatherPartlySunny)`
  ${IconMapWeather};
`;
export const IconWeatherCold = styled(TiWeatherSnow)`
  ${IconMapWeather};
`;
export const IconWifi = styled(FaWifi)`
  ${IconMapWeather};
  width: 3rem;
  height: 3rem;
`;

const IconMap = css`
  width: 5rem;
  height: 5rem;
  background-color: var(--lightBackground);
  border-radius: 10px;
  padding: 0.3vw;
  color: var(--words);
  :hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const IconMapNav = styled(SiOpenstreetmap)`
  ${IconMap};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: none;
  width: 70vw;
  height: 70vh;
  .map-container {
    width: 10%;
    height: 10%;
  }
`;

export const Map = styled.div`
  width: 10%;
  height: 10%;
`;

export const InformationSection = styled.div`
  background-color: var(--lightBackground);
  width: 69%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  border-radius: 10px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--background);
    width: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--lightBackground);
    border-radius: 10px;
    width: 12px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
    cursor: pointer;
  }
`;

export const MapBoxSection = styled.div`
  background-color: var(--background);
  width: 31%;
  height: 100%;
  overflow: hidden;
  color: var(--words);
  .mapboxgl-ctrl-logo {
    display: none;
  }
  .mapboxgl-ctrl {
    display: none;
  }

  .mapboxgl-ctrl-attrib {
    display: none;
  }
`;

export const MapViewBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: right;
  position: absolute;
  top: 30px;
  right: 12px;
  background-color: transparent;
  width: auto;
  height: 4vh;
  z-index: 100;
  gap: 10px;
`;

export const BtnViewGeneral = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--words);
  border-radius: 5px;
  border: 2px dotted var(--words);
  background-color: var(--background);
  padding: 5px;
  width: 4vw;
  :hover {
    cursor: pointer;
    color: var(--primary);
    border: 2px solid var(--primary);
  }
`;

export const BtnViewGeneralClicked = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: var(--background);
  padding: 5px;
  width: 100px;
`;

export const BtnViewSat = styled.button<IBtns>`
  ${({ isSattelite }) =>
    isSattelite
      ? `${BtnViewGeneralClicked}`
      : `${BtnViewGeneral}`}
`;

export const BtnViewLight = styled.button<IBtns>`
  ${({ isLight }) =>
    isLight
      ? `${BtnViewGeneralClicked}`
      : `${BtnViewGeneral}`}
`;

export const BtnViewStreet = styled.button<IBtns>`
  ${({ isStreet }) =>
    isStreet
      ? `${BtnViewGeneralClicked}`
      : `${BtnViewGeneral}`}
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
  background-color: var(--background);
  padding: 10px;
  width: 70%;
  height: auto;
`;

export const Climate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--lightBackground);
  width: 26%;
  height: auto;
  color: var(--words);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  overflow-x: hidden;
`;

export const WrapIconAndValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TempValueAside = styled.div`
  font-size: 3rem;
  font-weight: 100;
`;

export const LabelAside = styled.h4`
  font-size: 0.8rem;
  text-align: center;
  width: 90%;
  border-bottom: 5px solid var(--background);
  padding-bottom: 20px;
  :nth-last-child(1) {
    border-bottom: none;
  }
`;

export const WrapCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: var(--lightBackground);
  width: 100%;
  height: 50px;
  border-radius: 999px;
  padding: 1rem;
`;

export const NavigationMap = styled.div`
  width: 100%;
  height: 100%;
`;

export const RowDivs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: var(--background);
`;

export const styleModalDark = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: '#44475a',
  boxShadow: 24,
  p: 1,
  borderRadius: '10px',
};

export const styleModalLight = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: '#FFFAFA',
  boxShadow: 24,
  p: 1,
  borderRadius: '10px',
};
