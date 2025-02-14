import React from "react";
import "./VitalsGrid.css";
import RespiratoryIcon from "../icons/RespiratoryIcon";
import TemperatureIcon from "../icons/TemperatureIcon";
import HeartIcon from "../icons/HeartIcon";

const VitalCard = ({ Icon, title, value, unit, status }) => (
  <div className="vital-card">
    <div className="vital-icon">
      <Icon />
    </div>
    <div className="vital-title">{title}</div>
    <div className="vital-value">
      {value} {unit}
    </div>
    <div className="vital-status">{status}</div>
  </div>
);

const VitalsGrid = ({ vitals }) => {
  const { respiratory_rate, temperature, heart_rate } = vitals;

  return (
    <div className="vitals-grid">
      <VitalCard
        Icon={RespiratoryIcon}
        title="Respiratory Rate"
        value={respiratory_rate.value}
        unit="bpm"
        status={respiratory_rate.levels}
      />
      <VitalCard
        Icon={TemperatureIcon}
        title="Temperature"
        value={temperature.value}
        unit="°F"
        status={temperature.levels}
      />
      <VitalCard
        Icon={HeartIcon}
        title="Heart Rate"
        value={heart_rate.value}
        unit="bpm"
        status={heart_rate.levels}
      />
    </div>
  );
};

export default VitalsGrid;
