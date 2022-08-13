// Import módulos
import React, { useContext, useState } from 'react';

// Import interfaces
import { IContainer } from './interfaces';

// import dos services
import helper from '../../../services/helper';

// import do contexto
import { LanguageContext } from '../../context/LanguageContext';

// Import components estilizados
import {
  TitleFirst,
  IconWeatherFirst,
  Temp,
  WrapTemp,
  Container,
  Title,
  Img,
  ProgressBar,
  WrapBars,
  IconBarsWifi,
  PLabel,
  WrapFooterCard,
  IconBarsHomeSecurity,
  IconBarsTrans,
  WrapEach,
  PLifeCostLabel,
  IconBarsSatisfaction,
  LifeCostLabel,
  IconBarsCulture,
  IconWeather,
} from './styles';

/**
 * Parâmetros do componente
 * @param city h1, texto, nome da cidade
 * @param image Imagem da cidade em referencia
 * @param onClick Função realizada ao clicar no card
 * @param satisfactionValue valor de satisfacao
 * @param cultureValue valor de cultura
 * @param transValue valor do transporte
 * @param wifi valor da conexao com internet
 * @param cost valor de custo de vida
 * @param temperature valor da temperatura
 * @param costUnity unidade do custo de vida
 * @param unityTemp unidade de temperatura
 */
function CitiesCard(props: IContainer) {
  const { language } = useContext(LanguageContext);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <Container
      onClick={props.onClick}
      onMouseEnter={() => {
        setIsOpenInfo(true);
      }}
      onMouseLeave={() => {
        setIsOpenInfo(false);
      }}
    >
      <Img src={props.image} alt="City" />
      {!isOpenInfo && (
        <WrapTemp>
          <IconWeatherFirst width="6rem" height="6rem" />
          <Temp>
            {props.temperature}
            {props.unityTemp}
          </Temp>
          <Temp>
            {props.costUnity}
            {props.cost}
          </Temp>
          <TitleFirst>{props.city}</TitleFirst>
        </WrapTemp>
      )}
      {isOpenInfo && (
        <>
          <Title>{props.city}</Title>
          <WrapBars>
            <WrapEach>
              <PLabel>
                <IconBarsSatisfaction />
              </PLabel>
              <ProgressBar
                value={props.satisfactionValue}
                max="100"
                valor={props.satisfactionValue}
                title={helper.getText('satis', language)}
              />
            </WrapEach>
            <WrapEach>
              <PLabel>
                <IconBarsHomeSecurity />
              </PLabel>
              <ProgressBar
                value={props.homeSecutityValue}
                max="100"
                valor={props.homeSecutityValue}
                title={helper.getText('security', language)}
              />
            </WrapEach>
            <WrapEach>
              <PLabel>
                <IconBarsTrans />
              </PLabel>
              <ProgressBar
                value={props.transValue}
                max="100"
                valor={props.transValue}
                title={helper.getText('trans', language)}
              />
            </WrapEach>
            <WrapEach>
              <PLabel>
                <IconBarsCulture />
              </PLabel>
              <ProgressBar
                value={props.cultureValue}
                max="100"
                valor={props.cultureValue}
                title={helper.getText('culture', language)}
              />
            </WrapEach>
            <WrapFooterCard>
              <WrapEach
                title={helper.getText(
                  'wifiConnection',
                  language
                )}
              >
                <LifeCostLabel>
                  <IconBarsWifi />
                </LifeCostLabel>
                <PLifeCostLabel>
                  {props.wifi} fps
                </PLifeCostLabel>
              </WrapEach>
              <WrapEach
                title={helper.getText('pricing', language)}
              >
                <LifeCostLabel>
                  <IconBarsSatisfaction />
                </LifeCostLabel>
                <PLifeCostLabel>
                  {props.costUnity}
                  {props.cost}
                </PLifeCostLabel>
              </WrapEach>
              <WrapEach
                title={helper.getText('climate', language)}
              >
                <LifeCostLabel>
                  <IconWeather />
                </LifeCostLabel>
                <PLifeCostLabel>
                  {props.temperature}
                  {props.unityTemp}
                </PLifeCostLabel>
              </WrapEach>
            </WrapFooterCard>
          </WrapBars>
        </>
      )}
    </Container>
  );
}

export default CitiesCard;
