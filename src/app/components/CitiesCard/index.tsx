// Import módulos
import React, { useState } from "react";

// Import interfaces
import { IContainer } from "./interfaces";

// Import components estilizados
import { Container, Title, Img, ProgressBar, WrapBars,IconBarsWifi, PLabel, WrapFooterCard, IconBarsHomeSecurity, IconBarsTrans, WrapEach, PLifeCostLabel, IconBarsSatisfaction, LifeCostLabel, IconBarsCulture } from "./styles";


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
     <Img 
     src={Props.image} alt="City" />
     <Title>{Props.city}</Title>
     {isOpenInfo && 
      <WrapBars>
        <WrapEach>
         <PLabel><IconBarsSatisfaction/></PLabel>
         <ProgressBar value="28" max="100" valor={28} title="Satisfacao"/> 
         </WrapEach>
         <WrapEach>
         <PLabel><IconBarsHomeSecurity/></PLabel>
         <ProgressBar value="46" max="100" valor={46} title="Seguranca"/>
         </WrapEach>
         <WrapEach>
         <PLabel><IconBarsTrans/></PLabel>
         <ProgressBar value="18" max="100" valor={18} title="Transporte"/> 
         </WrapEach>
         <WrapEach>
         <PLabel><IconBarsCulture/></PLabel>
         <ProgressBar value="91" max="100" valor={91} title="Cultura"/>
         </WrapEach>
         <WrapFooterCard>
         <WrapEach title="Conexao com Wi-Fi">
          <LifeCostLabel><IconBarsWifi/></LifeCostLabel>
          <PLifeCostLabel>45 fps</PLifeCostLabel>
         </WrapEach>
         <WrapEach title="Custo de Vida">
          <LifeCostLabel><IconBarsSatisfaction/></LifeCostLabel>
          <PLifeCostLabel>$ 1.450,34</PLifeCostLabel>
         </WrapEach>
         </WrapFooterCard>
     </WrapBars>}
    </Container>
  );
}

export default CitiesCard;
