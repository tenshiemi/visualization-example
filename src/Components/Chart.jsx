import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ displayYear, normalizedData, yearsRange}) => (
  <ResponsiveContainer width="90%" height={400}>
    <BarChart
      data={
        normalizedData[
          yearsRange[displayYear]
        ]
      }
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" name="Population" />
    </BarChart>
  </ResponsiveContainer>
);


export default Chart;
