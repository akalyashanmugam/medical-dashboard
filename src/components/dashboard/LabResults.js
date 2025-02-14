import React from "react";
import "./LabResults.css";
import DownloadIcon from "../icons/DownloadIcon";

const LabResults = ({ results }) => {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <div className="results-list">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <span>{result}</span>
            <button className="download-btn" aria-label="Download result">
              <DownloadIcon className="icon-download" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
