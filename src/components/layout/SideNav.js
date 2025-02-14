import React from "react";
import { Search, MoreHorizontal } from "lucide-react";
import "./SideNav.css";

const PatientItem = ({ name, age, gender, image, isActive }) => (
  <div className={`patient-item ${isActive ? "active" : ""}`}>
    <img src={image} alt={name} className="patient-avatar" />
    <div className="patient-info">
      <span className="patient-name">{name}</span>
      <span className="patient-details">
        {gender}, {age}
      </span>
    </div>
    <button className="more-options">
      <MoreHorizontal size={20} />
    </button>
  </div>
);

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-card">
        <div className="side-nav-header">
          <div className="header-content">
            <h2>Patients</h2>
            <button className="search-button">
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className="patients-list">
          <PatientItem
            name="Emily Williams"
            age="18"
            gender="Female"
            image="https://fedskillstest.ct.digital/1.png"
          />
          <PatientItem
            name="Ryan Johnson"
            age="45"
            gender="Male"
            image="https://fedskillstest.ct.digital/2.png"
          />
          <PatientItem
            name="Brandon Mitchell"
            age="36"
            gender="Male"
            image="https://fedskillstest.ct.digital/3.png"
          />
          <PatientItem
            name="Jessica Taylor"
            age="28"
            gender="Female"
            image="https://fedskillstest.ct.digital/4.png"
            isActive={true}
          />
          <PatientItem
            name="Samantha Johnson"
            age="56"
            gender="Female"
            image="https://fedskillstest.ct.digital/5.png"
          />
          <PatientItem
            name="Ashley Martinez"
            age="54"
            gender="Female"
            image="https://fedskillstest.ct.digital/6.png"
          />
          <PatientItem
            name="Olivia Brown"
            age="32"
            gender="Female"
            image="https://fedskillstest.ct.digital/7.png"
          />
          <PatientItem
            name="Tyler Davis"
            age="19"
            gender="Male"
            image="https://fedskillstest.ct.digital/8.png"
          />
          <PatientItem
            name="Kevin Anderson"
            age="30"
            gender="Male"
            image="https://fedskillstest.ct.digital/9.png"
          />
          <PatientItem
            name="Dylan Thompson"
            age="36"
            gender="Male"
            image="https://fedskillstest.ct.digital/10.png"
          />
          <PatientItem
            name="Nathan Evans"
            age="58"
            gender="Male"
            image="https://fedskillstest.ct.digital/11.png"
          />
          <PatientItem
            name="Mike Nolan"
            age="31"
            gender="Male"
            image="https://fedskillstest.ct.digital/12.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
