import React, { useState } from "react";
import "./header.css";
import { Download, Menu } from "lucide-react";
import Dropdown from "./Dropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Header = ({
  activeBtn,
  setActivebtn,
  openMenu,
  setOpenMenu,
  showDropdown,
  setShowDropdown,
}) => {
  const display = () => {
    if (activeBtn === null) return "Reports";
    if (activeBtn === 0) return "Library";
    if (activeBtn === 1) return "People";
    if (activeBtn === 2) return "Activites";
    if (activeBtn === 3) return "Get Started";
    if (activeBtn === 4) return "Settings";
  };

  const [dropCardActiveState, setDropcardActiveState] = useState(null);

  return (
    <div className="header">
      <div className="header-contents">
        {/* mobile menu  */}
        <div className="mobile-menu">
          <h3>{display()}</h3>
        </div>
        <Menu
          className="menuBtn"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        {/* <Menu
          onClick={() => setOpenMenu((prev) => !prev)}
          className="menuButton"
        /> */}

        <h5 className="download">
          <Download size={16} className="download-icon" /> Download
        </h5>
      </div>
      <div className="Underline"></div>

      {!showDropdown && (
        <div className="Selection-Container">
          <div className="selection-main">
            <div
              className="selection-wrapper"
            >
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
      )}
    </div>
  );
};

export default Header;
