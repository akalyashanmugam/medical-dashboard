import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case "under observation":
        return "status-observation";
      case "cured":
        return "status-cured";
      case "inactive":
        return "status-inactive";
      default:
        return "status-default";
    }
  };

  return <span className={`status-badge ${getStatusClass()}`}>{status}</span>;
};

export default StatusBadge;
