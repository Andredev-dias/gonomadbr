// Import mÃ³dulos
import styled, { css } from 'styled-components';
import {
  FcCurrencyExchange,
  FcGraduationCap,
  FcShipped,
  FcHome,
  FcWiFiLogo,
} from 'react-icons/fc';
import { TiWeatherPartlySunny } from 'react-icons/ti';
// Import interfaces
import { IContainer } from './interfaces';

interface IBar {
  valor?: number;
}

const IconBarsCSS = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const IconBarsCSS1 = css`
  width: 5rem;
  height: 5rem;
  color: var(--words);
`;

export const IconBarsSatisfaction = styled(
  FcCurrencyExchange
)`
  ${IconBarsCSS};
`;

export const IconBarsCulture = styled(FcGraduationCap)`
  ${IconBarsCSS};
`;

export const IconBarsTrans = styled(FcShipped)`
  ${IconBarsCSS};
`;

export const IconBarsHomeSecurity = styled(FcHome)`
  ${IconBarsCSS};
`;

export const IconBarsWifi = styled(FcWiFiLogo)`
  ${IconBarsCSS};
`;
export const IconWeather = styled(TiWeatherPartlySunny)`
  ${IconBarsCSS};
`;

export const IconWeatherFirst = styled(
  TiWeatherPartlySunny
)`
  ${IconBarsCSS1};
  color: #f8f8f2;
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: var(--background);
  border-radius: 10px;
  border: none;
  overflow: hidden;
  position: relative;
  :hover Img {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 500ms ease-in-out;
    opacity: 0.15;
  }
  :hover {
    box-shadow: 1px 1px 10px 1px #111010;
  }
`;

export const Title = styled.h2<IContainer>`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--words);
  width: 100%;
  height: auto;
  padding: 5px;
  text-shadow: 2px 2px var(--background);
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
`;

export const WrapBars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  position: absolute;
  width: 100%;
  height: 90%;
  padding: 2rem 1rem 1rem 1rem;
  animation-name: goUp;
  animation-duration: 1s;
  :hover {
    cursor: pointer;
  }
  @keyframes goUp {
    from {
      top: 50px;
      opacity: 0.2;
    }
    to {
      top: 12px;
      opacity: 1;
    }
  }
`;

export const WrapEach = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const WrapFooterCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--lightBackground);
  height: auto;
  width: 100%;
  padding: 5px;
  border-radius: 999px;
  gap: 15px;
`;

export const PLabel = styled.h3`
  color: var(--words);
  font-size: 1.5rem;
  width: 50px;
`;

export const ProgressBar = styled.progress<IBar>`
  width: 10vw;
  height: 25px;
  appearance: none;
  border-radius: 999px;
  ::-webkit-progress-bar {
    background-color: var(--background);
    border-radius: 999px;
  }
  ::-webkit-progress-value {
    border-radius: 999px;
    background-color: ${({ valor }) =>
      valor! <= 30
        ? '#800000'
        : valor! <= 70
        ? '#cc9900'
        : '#264d00'};
  }
`;

export const footerCardStyle = css`
  color: var(--words);
  font-size: 0.7rem;
`;

export const LifeCostLabel = styled.h5`
  ${footerCardStyle}
  color:var(--primary);
`;

export const PLifeCostLabel = styled.p`
  ${footerCardStyle}
`;

export const WrapTemp = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10%;
  left: 10%;
`;

export const Temp = styled.h1`
  color: #f8f8f2;
  font-size: 2.5rem;
  text-shadow: 3px 5px #282a36;
  text-align: left;
  margin-top: 2vh;
`;

export const TitleFirst = styled.h2<IContainer>`
  position: absolute;
  top: 20px;
  left: 100px;
  color: #f8f8f2;
  width: 100px;
  height: auto;
  font-size: 1.5rem;
  text-shadow: 2px 2px #282a36;
`;
