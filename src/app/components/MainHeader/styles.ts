import styled, {css} from "styled-components";
import {GiBrazil} from "react-icons/gi"
import {VscAccount} from "react-icons/vsc";

const IconLoginCSS = css`
  width: 10rem;
  height: 10rem;
  color: var(--cyan);
`;

const IconBrazilCSS = css`
  width: 6rem;
  height: 6rem;
  color: var(--white);
  `;

export const IconLogin = styled(VscAccount)`
${IconLoginCSS};
`;

export const IconBrazil = styled(GiBrazil)`
${IconBrazilCSS};
`;

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
width: 100%;
height: 55vh;
border-radius: 10px;
overflow: hidden;
`;

export const Section = styled.div`
position: absolute;
top: 4vh;
left: 10%;
width: 80vw;
min-width: 50px;
height: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-radius: 20px;
border: 1px solid var(--white);
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
background-color: var(--background);
width:280px;
height:400px;
border-radius: 20px;
color: white;
border: 2px solid var(--cyan);
gap: 10px;
`;

export const NoRegistration = styled.h5`
color: var(--cyan);
opacity: 0.7;
:hover{
    cursor: pointer;
    opacity: 1;
}
`;

export const Input = styled.input`
padding: 0.5vw;
width: 200px;
height: 50px;
color:var(--white);
font-size: 1.2rem;
border-radius: 999px;
border: 2px solid var(--cyan);
background-color: var(--light-background);
text-align: center;
::placeholder{
 color: var(--cyan);
}
`;

export const LeftSection = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content:left;
`;

export const TitleHeader = styled.div`
display: flex;
flex-direction: row;
align-items: left;
justify-content:left;
gap: 10px;
color: var(--white);
`;

export const TextHeader = styled.h1`
font-size: 6rem;
`;

export const SubTitle = styled.p`
font-size: 1.6rem;
color: var(--cyan);
`;