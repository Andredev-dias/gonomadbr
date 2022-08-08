import styled, {css} from "styled-components";
import {GiBrazil} from "react-icons/gi"
import {VscAccount} from "react-icons/vsc";

const IconLoginCSS = css`
  width: 10rem;
  height: 10rem;
  color: ${props => props.theme.primary};
  /* box-shadow: 2px 2px ${props => props.theme.background}; */
`;

const IconBrazilCSS = css`
  width: 6rem;
  height: 6rem;
  color: ${props => props.theme.words};
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
height: auto;
overflow: hidden;
position: relative;
overflow: hidden;
`;

export const BackgroundImage = styled.img`
width: 100%;
height: 100%;
`;

export const Section = styled.div`
position: absolute;
top: 10%;
left: 10%;
width: 80vw;
height:60vh;
max-height:60vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-radius: 10px;
border: 1px solid ${props => props.theme.words};
background-color: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
padding:80px;
`;

export const RightSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-color: ${props => props.theme.background};
width:280px;
height:400px;
border-radius: 10px;
color: ${props => props.theme.words};
border: none;
gap: 10px;
`;

export const NoRegistration = styled.h5`
color: ${props => props.theme.primary};
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
color:${props => props.theme.words};
font-size: 1.2rem;
border-radius: 999px;
border: 2px solid ${props => props.theme.primary};
background-color: ${props => props.theme.lightBackground};
text-align: center;
::placeholder{
 color: ${props => props.theme.primary};
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
color: ${props => props.theme.words};
`;

export const TextHeader = styled.h1`
font-size: 6rem;
text-shadow: 2px 2px ${props => props.theme.background};
`;

export const SubTitle = styled.p`
font-size: 1.6rem;
color: ${props => props.theme.primary};
text-shadow: 2px 2px ${props => props.theme.background};
`;