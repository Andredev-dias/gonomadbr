// Import módulos
import React from "react";

// Import interfaces
import { IContainer } from "./interfaces";

// Import components estilizados
import { Container, Title } from "./styles";

/**
 * Parâmetros do componente
 * @param city h1, texto, nome da cidade
 * @param image Imagem da cidade em referencia
 * @param onClick Função realizada ao clicar no card
 * 
 */
function CitiesCard(Props: IContainer) {
  return (
    <Container
      onClick={Props.onClick}
    >
     <img src={Props.image} alt="City" />
     <Title>{Props.city}</Title>
    </Container>
  );
}

export default CitiesCard;
