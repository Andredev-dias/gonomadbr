import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: none;
width: 70vw;
height: 70vh;
`;

export const InformationSection = styled.div`
background-color:  ${props => props.theme.background};
width: 50%;
height: 100%;
overflow-y: auto;
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
${props => props.theme.background}
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.lightBackground}; 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:${props => props.theme.primary}; 
}
`;

export const MapBoxSection = styled.div`
background-color: ${props => props.theme.background};
width: 50%;
height: 100%;
overflow: hidden;
color: ${props => props.theme.words};
.map-container {
    width: 100%;
    height: 750px;
}
`;