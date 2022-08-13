import React, { useState } from 'react';
import LineCharts from '../LineCharts';
import PizzaChart from '../PizzaChart';
import BarChart from '../BarChart';
import {
  Container,
  WrapCharts,
  WrapBtns,
  Btns,
  WrapGraph,
} from './styles';

// Import interfaces
import { ICharts } from './interfaces';

const Charts = (props: ICharts) => {
  const [line, setLine] = useState<boolean>(false);
  const [pizza, setPizza] = useState<boolean>(false);
  const [bar, setBar] = useState<boolean>(false);

  // funcoes para atividades com botoes
  const handleLine = () => {
    setLine(true);
    setPizza(false);
    setBar(false);
  };

  const handlePizza = () => {
    setLine(false);
    setPizza(true);
    setBar(false);
  };

  const handleBar = () => {
    setLine(false);
    setPizza(false);
    setBar(true);
  };

  return (
    <Container>
      <WrapCharts>
        <WrapBtns>
          <Btns onClick={handleLine}>Line Charts</Btns>
          <Btns onClick={handlePizza}>Pizza Chart</Btns>
          <Btns onClick={handleBar}>Bar Chart</Btns>
        </WrapBtns>
        <WrapGraph>
          {line ? (
            <LineCharts />
          ) : pizza ? (
            <PizzaChart />
          ) : bar ? (
            <BarChart />
          ) : (
            <LineCharts />
          )}
        </WrapGraph>
      </WrapCharts>
    </Container>
  );
};
export default Charts;
