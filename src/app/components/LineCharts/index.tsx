import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import { Container } from './styles';

// Import interfaces
// import { ICharts } from "./interfaces";

const LineCharts = () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 1200, amt: 800 },
    { name: 'Page C', uv: 1400, pv: 100, amt: 200 },
  ];

  return (
    <Container>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 0,
          left: -10,
        }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
        />
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="5 5"
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Container>
  );
};
export default LineCharts;
