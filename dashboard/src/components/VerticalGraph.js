import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// We need to register the components we are going to use with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const VerticalGraph = ({ data }) => {
  // Options to configure the appearance of the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
      },
      title: {
        display: true,
        text: "Holdings Breakdown by Price", // Chart title
      },
    },
  };

  return <Bar options={options} data={data} />;
};