import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./BloodPressureChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
];
const systolicData = [120, 115, 160, 115, 150, 160];
const diastolicData = [110, 75, 110, 90, 75, 80];

const BloodPressureChart = () => {
  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        borderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#718096",
        },
        grid: {
          color: "#CBD5E0",
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718096",
        },
      },
    },
  };

  return (
    <div className="blood-pressure-section">
      <div className="chart-header">
        <h3>Blood Pressure</h3>
        <div className="custom-select">
          <select>
            <option>Last 6 months</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>
      </div>

      <div className="chart-wrapper">
        <div className="chart-container">
          <Line data={chartData} options={options} />
        </div>

        <div className="readings-container">
          <div className="reading systolic">
            <div className="reading-header">
              <div className="status-dot systolic"></div>
              <span className="reading-title">Systolic</span>
            </div>
            <h4>160</h4>
            <div className="reading-status">
              <ChevronUp size={16} />
              <span>Higher than Average</span>
            </div>
          </div>
          <div className="reading diastolic">
            <div className="reading-header">
              <div className="status-dot diastolic"></div>
              <span className="reading-title">Diastolic</span>
            </div>
            <h4>78</h4>
            <div className="reading-status">
              <ChevronDown size={16} />
              <span>Lower than Average</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
