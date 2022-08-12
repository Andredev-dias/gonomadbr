import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    padding: 10px;
`;

export const WrapCharts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2vh;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.lightBackground};
    padding: 10px;
    border-radius: 10px;
`;

export const WrapBtns = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1vw;
    width: 100%;
    height: 20%;
    background-color: ${props => props.theme.background};
    padding: 10px;
    border-radius: 999px;
`;
export const Btns = styled.button` 
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px;
border-radius: 999px;
background-color: ${props => props.theme.lightBackground};
border: none;
color:  ${props => props.theme.words};
opacity: 0.8;
width: 100%;
:hover{
color:  ${props => props.theme.primary};
opacity: 1;
cursor: pointer;
}
`;

export const WrapGraph = styled.div` 
width: 100%;
height: 80%;
`;

