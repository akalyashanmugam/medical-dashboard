import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import VitalsGrid from "./VitalsGrid";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ diagnosisHistory }) => {
  return (
    <div className="diagnosis-history-card">
      <h2>Diagnosis History</h2>
      <BloodPressureChart diagnosisHistory={diagnosisHistory} />
      <VitalsGrid vitals={diagnosisHistory[0]} />
    </div>
  );
};

export default DiagnosisHistory;
