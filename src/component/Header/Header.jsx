import React, { useState } from "react";
import "./header.css";
import { Download, Menu } from "lucide-react";
import Dropdown from "./Dropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";


const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="header">
      <div className="header-contents">
        {/* mobile menu  */}
        <div className="mobile-menu">
          <h3>Reports</h3>
        </div>
         <Menu className="menuBtn" style={{ cursor: "pointer" }}
          onClick={() => setOpenMenu((prev) => !prev)}
          
        />
        {/* <Menu
          onClick={() => setOpenMenu((prev) => !prev)}
          className="menuButton"
        /> */}

       
        <h5 className="download">
          <Download size="16" className="download-icon" /> Download
        </h5>
      </div>
      <div className="Underline"></div>

      <div className="Selection-Container">
        <div className="selection-main">

       
        <div className="selection-wrapper">
          <Dropdown
            lable="Timeframe"
            defaultValue="This Month"
            options={["Last 7 Days", "This Month", "This Year", "Custom"]}
          />
        </div>

        <div>
          <div className="selection-wrapper">
            <MultiSelectDropdown />
          </div>
        </div>

        <div className="selection-wrapper">
          
             <Dropdown lable="topic" options={["All"]} defaultValue="All" />

        
         
        </div>
      </div>
       </div>
     </div>
  );
};

export default Header;
