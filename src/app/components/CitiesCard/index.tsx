// Import módulos
import React, { useState } from "react";

// Import interfaces
import { IContainer } from "./interfaces";

// Import components estilizados
import { Container, Title, Img, ProgressBar, WrapBars, PLabel, WrapEach,PLifeCostLabel, LifeCostLabel } from "./styles";

/**
 * Parâmetros do componente
 * @param city h1, texto, nome da cidade
 * @param image Imagem da cidade em referencia
 * @param onClick Função realizada ao clicar no card
 * 
 */
function CitiesCard(Props: IContainer) {
const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <Container
      onClick={Props.onClick}
      onMouseEnter={()=> {setIsOpenInfo(true)}}
      onMouseLeave={()=> {setIsOpenInfo(false)}}
    >
     <Img src={Props.image} alt="City" />
     <Title>{Props.city}</Title>
     {isOpenInfo && 
      <WrapBars>
        <WrapEach>
         <PLabel>@:</PLabel>
         <ProgressBar value="32" max="100"/> 
         </WrapEach>
         <WrapEach>
         <PLabel>$</PLabel>
         <ProgressBar value="70" max="100"/>
         </WrapEach>
         <WrapEach>
         <PLabel>%</PLabel>
         <ProgressBar value="45" max="100"/> 
         </WrapEach>
         <WrapEach>
         <PLabel>#</PLabel>
         <ProgressBar value="91" max="100"/>
         </WrapEach>
         <WrapEach>
          <LifeCostLabel>LifeCost</LifeCostLabel>
          <PLifeCostLabel>$ 1.450,34</PLifeCostLabel>
         </WrapEach>
     </WrapBars>}
    </Container>
  );
}

export default CitiesCard;
