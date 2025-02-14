import React from "react";
import StatusBadge from "../shared/StatusBadge";
import "./DiagnosticList.css";

const DiagnosticList = ({ diagnostics }) => {
  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <table>
        <thead className="diagnostic-header">
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnostic, index) => (
            <tr key={index}>
              <td>{diagnostic.name}</td>
              <td>{diagnostic.description}</td>
              <td>
                <StatusBadge status={diagnostic.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
