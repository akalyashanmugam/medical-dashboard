import React from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  Menu,
  MoreVertical,
} from "lucide-react";
import "./TopNav.css";
import OverviewIcon from "../icons/OverviewIcon";
import PatientsIcon from "../icons/PatientsIcon";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#00BFA6" />
            <path d="M2 16L16 23L30 16" stroke="#00BFA6" strokeWidth="2" />
            <path d="M2 23L16 30L30 23" stroke="#00BFA6" strokeWidth="2" />
          </svg>
          <span>Tech Care</span>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link">
            <OverviewIcon />
            <span>Overview</span>
          </a>
          <a href="#" className="nav-link active">
            <PatientsIcon />
            <span>Patients</span>
          </a>
          <a href="#" className="nav-link">
            <Calendar size={20} />
            <span>Schedule</span>
          </a>
          <a href="#" className="nav-link">
            <MessageSquare size={20} />
            <span>Message</span>
          </a>
          <a href="#" className="nav-link">
            <CreditCard size={20} />
            <span>Transactions</span>
          </a>
        </div>
      </div>

      <div className="nav-right">
        <div className="doctor-info">
          <img
            src="https://fedskillstest.ct.digital/9.png"
            alt="Dr. Jose Simmons"
          />
          <div className="doctor-details">
            <span className="doctor-name">Dr. Jose Simmons</span>
            <span className="doctor-role">General Practitioner</span>
          </div>
        </div>
        <button className="settings-button">
          <Settings size={24} />
        </button>
        <MoreVertical size={20} />
      </div>
    </nav>
  );
};

export default TopNav;
