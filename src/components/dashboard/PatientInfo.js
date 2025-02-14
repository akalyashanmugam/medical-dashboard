import React from "react";
import { formatDate, formatPhoneNumber } from "../../utils/helpers";
import BirthIcon from "../icons/BirthIcon";
import FemaleIcon from "../icons/FemaleIcon";
import PhoneIcon from "../icons/PhoneIcon";
import InsuranceIcon from "../icons/InsuranceIcon";
import "./PatientInfo.css";

const InfoItem = ({ Icon, label, value }) => (
  <div className="info-item">
    <div className="info-icon">
      <Icon className="icon" />
    </div>
    <div className="info-content">
      <label>{label}</label>
      <p>{value}</p>
    </div>
  </div>
);

const PatientInfo = ({ patient }) => {
  return (
    <div className="patient-info">
      <div className="profile-card">
        <img src={patient.profile_picture} alt={patient.name} />
        <h2>{patient.name}</h2>

        <div className="info-list">
          <InfoItem
            Icon={BirthIcon}
            label="Date Of Birth"
            value={formatDate(patient.date_of_birth)}
          />
          <InfoItem Icon={FemaleIcon} label="Gender" value={patient.gender} />
          <InfoItem
            Icon={PhoneIcon}
            label="Contact Info"
            value={formatPhoneNumber(patient.phone_number)}
          />
          <InfoItem
            Icon={PhoneIcon}
            label="Emergency Contacts"
            value={formatPhoneNumber(patient.emergency_contact)}
          />
          <InfoItem
            Icon={InsuranceIcon}
            label="Insurance Provider"
            value={patient.insurance_type}
          />
        </div>

        <button className="show-all">Show All Information</button>
      </div>
    </div>
  );
};

export default PatientInfo;
