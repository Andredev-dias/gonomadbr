import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
width: 100%;
height: 40vh;
overflow: hidden;

`;

export const Section = styled.div`
position: absolute;
top: 5vh;
left: 10%;
width: 80vw;
min-width: 50px;
height: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-radius: 20px;
border: 2px solid white;
background-color: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
padding: 1vw;
`;

export const RightSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-color: black;
width:280px;
height:400px;
border-radius: 20px;
color: white;
border: 2px solid white;
`;

export const LeftSection = styled.div`
color: white;
`;