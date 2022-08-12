import styled, {css} from "styled-components";
import {FcCurrencyExchange, FcGraduationCap, FcShipped, FcHome} from "react-icons/fc";

interface IBar{
    valor?: number;
  }

const IconBarsCSS = css`
  width: 10%;
  height: 2rem;
  `;

export const IconBarsSatisfaction = styled(FcCurrencyExchange)`
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

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${props => props.theme.lightBackground};
width: 100%;
height: 50px;
border-radius: 999px;
padding: 1rem;

`;


export const LabelPBar = styled.h5`
 width: 20%;
    color:${props => props.theme.words} ;
    font-size: 1.2rem;
    font-weight: 100;
`;

export const ValuePBar = styled.h5<IBar>`
     width: 10%;
    color: ${({valor}) => valor! <= 30 ? "#800000" : valor! <= 70 ? "#cc9900" : "#264d00" } ;
    font-size: 1.2rem;
    font-weight: 100;
    background-color: ${props => props.theme.background} ;
    text-align: center;
    border-radius: 999px;
`;

export const ProgressBar = styled.progress<IBar>`
    width: 55%;
    height: 25px;
    appearance: none;
    border-radius: 999px;
    ::-webkit-progress-bar {
      background-color: ${props => props.theme.background};
      border-radius: 999px;
    }
    ::-webkit-progress-value {
      border-radius: 999px;
      background-color: ${({valor}) => valor! <= 30 ? "#800000" : valor! <= 70 ? "#cc9900" : "#264d00" };
    }
`;


