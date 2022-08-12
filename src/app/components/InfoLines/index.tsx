// Import módulos
import React from "react";

// Import interfaces
import { IContainer } from "./interfaces";

// Import components estilizados
import {ValuePBar,LabelPBar, ProgressBar,Container, IconBarsSatisfaction, IconBarsCulture, IconBarsTrans, IconBarsHomeSecurity } from "./styles";

/**
 * Parâmetros do componente
 * @param infoLabelCost icone da linha
 * @param infoValueCost icone da linha
 */

function InfoLines(props: IContainer) {

  return (
    <>
    <Container>
      <IconBarsSatisfaction/>
      <LabelPBar>{props.infoLabelCost}</LabelPBar>
      <ProgressBar value={props.infoValueCost} max={100} valor={props.infoValueCost}></ProgressBar>
      <ValuePBar valor={props.infoValueCost}>{props.infoValueCost}%</ValuePBar>
    </Container>
    <Container>
      <IconBarsHomeSecurity/>
      <LabelPBar>{props.infoLabelSec}</LabelPBar>
      <ProgressBar value={props.infoValueSec} max={100} valor={props.infoValueSec}></ProgressBar>
      <ValuePBar valor={props.infoValueSec}>{props.infoValueSec}%</ValuePBar>
    </Container>
    <Container>
    <IconBarsTrans/>
      <LabelPBar>{props.infoLabelTrans}</LabelPBar>
      <ProgressBar value={props.infoValueTrans} max={100} valor={props.infoValueTrans}></ProgressBar>
      <ValuePBar valor={props.infoValueTrans}>{props.infoValueTrans}%</ValuePBar>
   </Container>
   <Container>
      <IconBarsCulture/>
      <LabelPBar>{props.infoLabelCul}</LabelPBar>
      <ProgressBar value={props.infoValueCul} max={100} valor={props.infoValueCul}></ProgressBar>
      <ValuePBar valor={props.infoValueCul}>{props.infoValueCul}%</ValuePBar>
   </Container>
</>
  );
}

export default InfoLines;
