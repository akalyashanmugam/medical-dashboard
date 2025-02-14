import React from "react";
import TopNav from "./components/layout/TopNav";
import SideNav from "./components/layout/SideNav";
import DashboardContainer from "./containers/DashboardContainer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="main-content">
        <SideNav />
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
