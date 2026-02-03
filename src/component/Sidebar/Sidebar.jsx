import "./sidebar.css";
import SidebarLogo from "./TESLA.png";
import {
  TrendingUp,
  Zap,
  Users,
  NotebookText,
  Lightbulb,
  Settings,
  Menu,
} from "lucide-react";

const Sidebar = ({openMenu}) => {
  return (
    <div className={`sidebar ${openMenu ? "show" : ""}`}>
      <div className="sidebar-wrapper">
        
        <div className="Logo">
          <img src={SidebarLogo} alt="" />
        </div>

        <div className="otherMenu">
          <h2 className="active">
            <TrendingUp className="icon" />
            Reports
          </h2>
          <h2>
            <Zap className="icon" />
            Library
          </h2>
          <h2>
            <Users className="icon" />
            People
          </h2>
          <h2>
            <NotebookText className="icon" />
            Activites
          </h2>
        </div>

        <h3 style={{ color: "gray", marginLeft: "20px" }}>Support</h3>

        <div className="otherMenu">
          <h2>
            <Lightbulb className="icon" />
            Get Started
          </h2>
          <h2>
            <Settings className="icon" />
            Settings
          </h2>

          <div className="user-profile">
            <div className="underline"></div>
            <img
              style={{
                borderRadius: "50px",
                height: "30px",
                width: "30px",
                marginLeft: "20px",
                marginTop: "30px",
              }}
              src={SidebarLogo}
              alt=""
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginLeft: "20px",
                marginTop: "7px",
              }}
            >
              Kingsley
            </span>
            <span
              style={{ fontSize: "11px", marginLeft: "20px", color: "gray" }}
            >
              olorunfemiolakunle44@gmail.com
            </span>
          </div>
        </div>
      </div>
     </div>
    
  
  );
};

export default Sidebar;
