// Import mÃ³dulos
import styled from "styled-components";

// Import interfaces
import { IContainer } from "./interfaces";

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background: var(--background);
  border-radius: 20px;
  border: 2px solid var(--white);
`;

export const Title = styled.h1<IContainer>`
 color: var(--white);
`;