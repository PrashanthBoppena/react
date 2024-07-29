// PieChartComponent.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomPieChart = ({ data, options }) => (
  <div>
    <Pie data={data} options={options} />
  </div>
);

export default CustomPieChart;

