import { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarLogo from "./TESLA.png";

import { auth } from "../Firebase/firebase";
import {
  TrendingUp,
  Zap,
  Users,
  NotebookText,
  Lightbulb,
  Settings,
  Menu,
} from "lucide-react";

const Sidebar = ({
  openMenu,
  setActivebtn,
  activeBtn,
  setShowDropdown,

passUserRegisterNameSignUp,
 setPassUserRegisterNameSignUp

  
}) => {
 



  return (
    <div className={`sidebar ${openMenu ? "show" : ""}`}>
      <div className="sidebar-wrapper">
        <div className="Logo">
          <img src={SidebarLogo} alt="" />
        </div>

        <div className="otherMenu">
          <h2
            onClick={() => {
              setActivebtn(null);
              setShowDropdown(false);
            }}
            className={`  ${activeBtn === null && "active"} `}
          >
            <TrendingUp size={18} className="icon" />
            Reports
          </h2>
          <h2
            onClick={() => {
              setActivebtn(0);
              setShowDropdown(true);
            }}
            className={` ${activeBtn === 0 && "active"}`}
          >
            <Zap size={18} className="icon" />
            Library
          </h2>
          <h2
            className={` ${activeBtn === 1 && "active"}`}
            onClick={() => {
              setActivebtn(1);
              setShowDropdown(true);
            }}
          >
            <Users size={18} className="icon" />
            People
          </h2>
          <h2
            className={` ${activeBtn === 2 && "active"}`}
            onClick={() => {
              setActivebtn(2);
              setShowDropdown(true);
            }}
          >
            <NotebookText size={18} className="icon" />
            Activites
          </h2>
        </div>

        <h3 style={{ color: "gray", marginLeft: "20px" }}>Support</h3>

        <div className="otherMenu">
          <h2
            className={` ${activeBtn === 3 && "active"}`}
            onClick={() => {
              setActivebtn(3);
              setShowDropdown(true);
            }}
          >
            <Lightbulb size={18} className="icon" />
            Get Started
          </h2>
          <h2
            className={` ${activeBtn === 4 && "active"}`}
            onClick={() => {
              setActivebtn(4);
              setShowDropdown(true);
            }}
          >
            <Settings size={18} className="icon" />
            Settings
          </h2>

          <div className="user-profile">
            <div className="underline"></div>
            <img
              style={{
                borderRadius: "50px",
                height: "30px",
                width: "30px",

                marginTop: "30px",
              }}
              src={SidebarLogo}
              alt=""
            />
            <span
              style={{
              fontSize: "1rem",
                fontWeight: "600",
                marginTop: "7px",
                color:"gray"
                
              }}
            >
              {passUserRegisterNameSignUp}
             
            </span>
            <span style={{ fontSize: "11px", color: "gray" }}>
            hello
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
