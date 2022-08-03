// Import mÃ³dulos
import styled from "styled-components";

// Import interfaces
import { IContainer } from "./interfaces";

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: var(--background);
  border-radius: 20px;
  border: 1px solid var(--white);
  overflow: hidden;
  position: relative;
  :hover{
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px var(--cyan) ;
  }
`;

export const Title = styled.h2<IContainer>`
 position: absolute;
 top: 0;
 left: 0;
 color: var(--white);
 width: 100%;
 height: auto;
 background-color: var(--light-background);
 padding: 5px;
`;

export const Img = styled.img`
 width: 100%;
 height: 100%;
 opacity: 1;
:hover{
    transform: scale(1.5);
    transition: all 500ms ease-in-out;
    opacity: 0.5;
  }
`;