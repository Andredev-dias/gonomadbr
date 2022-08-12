// Import módulos
import React from "react";

// Import interfaces
import { IContainer } from "./interfaces";

// Import components estilizados
import { Container } from "./styles";

/**
 * Parâmetros do componente
 * @param infoLabelCost icone da linha
 * @param infoValueCost icone da linha
 */

function InfoLines(props: IContainer) {

  return (
    <>
    <Container>
      <i>@</i>
      <h5>{props.infoLabelCost}</h5>
      <progress value={props.infoValueCost} max={100}></progress>
      <p>{props.infoValueCost}</p>
    </Container>
    <Container>
      <i>@</i>
      <h5>{props.infoLabelSec}</h5>
      <progress value={props.infoValueSec} max={100}></progress>
      <p>{props.infoValueSec}</p>
    </Container>
    <Container>
      <i>@</i>
      <h5>{props.infoLabelTrans}</h5>
      <progress value={props.infoValueTrans} max={100}></progress>
      <p>{props.infoValueTrans}</p>
   </Container>
   <Container>
      <i>@</i>
      <h5>{props.infoLabelCul}</h5>
      <progress value={props.infoValueCul} max={100}></progress>
      <p>{props.infoValueCul}</p>
   </Container>
</>
  );
}

export default InfoLines;
