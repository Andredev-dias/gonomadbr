// Import mÃ³dulos
import styled, {css} from "styled-components";

// Import interfaces
import { IContainer } from "./interfaces";

interface IBar{
  valor: number;
}


export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: var(--background);
  border-radius: 20px;
  border: none;
  overflow: hidden;
  position: relative;
  :hover Img{
    cursor: pointer;
    transform: scale(1.2);
    transition: all 500ms ease-in-out;
    opacity: 0.3;
  }
  :hover{
    box-shadow: 1px 1px 10px 1px #111010;
  }
`;

export const Title = styled.h2<IContainer>`
 position: absolute;
 top: 0;
 left: 0;
 color: var(--white);
 width: 100%;
 height: auto;
 padding: 5px;
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
padding: 2.5rem 1rem 1rem 1rem;
animation-name: goUp;
animation-duration: 1s;
:hover{
  cursor: pointer;
}
@keyframes goUp {
from  {
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

export const PLabel = styled.h3`
color: var(--white);
font-size:1.5rem ;
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
  background-color: ${({valor}) => valor <= 30 ? "red" : valor <= 70 ? "yellow" : "green" };
}
`;


export const footerCardStyle = css`
color: var(--white);
font-size: 1rem;
`;

export const LifeCostLabel = styled.h5`
${footerCardStyle}
`;

export const PLifeCostLabel = styled.p`
${footerCardStyle}
`;