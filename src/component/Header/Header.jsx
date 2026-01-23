import React from "react";
import "./header.css";
import { Download } from "lucide-react";
import Dropdown from "./Dropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h3>Reports</h3>

        <h5>
          <Download size="16" className="download-icon" /> Download
        </h5>
      </div>
      <div className="Underline"></div>

      <div className="Selection-Container">
        <div className="selection-wrapper ">
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
  );
};

export default Header;
