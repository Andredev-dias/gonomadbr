import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
background-color: ${props => props.theme.lightBackground};
width: 100%;
height: 50px;
border-radius: 999px;
padding: 1rem;
`;


