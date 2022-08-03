import styled from "styled-components";

export const Container = styled.div`
width: 99vw;
height: 200vh;
background-color: blue;
`;

export const FilterMenu = styled.main`
display: flex;
flex-direction: row;
align-items: left;
justify-content: left;
width: 99vw;
height: 100px;
background: yellow;
margin-top: 15vh;
position: sticky;
top: 0;
`;

export const WrapPrincipal = styled.main`
width: 99vw;
height: auto;
background-color: white;
padding: 2vw;
position: sticky;
top: 100px;
`;

export const PrincipalSection = styled.main`
width: 100%;
height: auto;
background-color: red;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
padding: 2vw;

`;

