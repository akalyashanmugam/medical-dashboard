import React, { useState, useEffect } from "react";
import { fetchPatientData } from "../services/api";
import DiagnosisHistory from "../components/dashboard/DiagnosisHistory";
import DiagnosticList from "../components/dashboard/DiagnosticList";
import PatientInfo from "../components/dashboard/PatientInfo";
import LabResults from "../components/dashboard/LabResults";
import "./DashboardContainer.css";

const DashboardContainer = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatientData = async () => {
      try {
        const data = await fetchPatientData();
        setPatientData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="error-screen">
          <h2>Error loading patient data</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="diagnosis-section">
        <DiagnosisHistory diagnosisHistory={patientData.diagnosis_history} />
        <DiagnosticList diagnostics={patientData.diagnostic_list} />
      </div>
      <aside className="sidebar">
        <PatientInfo patient={patientData} />
        <LabResults results={patientData.lab_results} />
      </aside>
    </div>
  );
};

export default DashboardContainer;
