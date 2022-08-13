import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--background);
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
    background-color:var(--lightBackground);
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
    height: auto;
    background-color:var(--background);
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
background-color: var(--lightBackground);
border: none;
color: var(--words);
opacity: 0.8;
width: 100%;
:hover{
color:  var(--primary);
opacity: 1;
cursor: pointer;
}
`;

export const WrapGraph = styled.div` 
width: 100%;
height: 80%;
`;

