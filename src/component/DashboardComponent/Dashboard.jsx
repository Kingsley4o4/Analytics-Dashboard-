import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Header from "../../component/Header/Header";
import StatCard from "../../component/StatCard/StatCard";
import { useState } from "react";

const Dashboard = ({userRegisterNameSignUp, setUserRegisterNameSignUp}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeBtn, setActivebtn] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [passUserRegisterNameSignUp, setPassUserRegisterNameSignUp] = useState(userRegisterNameSignUp ,setUserRegisterNameSignUp)
 


  const display1 = (
    <div className="DisplayCard">
      <h1>Library</h1>
    </div>
  );
  const display2 = (
    <div className="DisplayCard">
      <h1>people</h1>
    </div>
  );

  const display3 = (
    <div className="DisplayCard">
      <h1>Activites</h1>
    </div>
  );

  const display4 = (
    <div className="DisplayCard">
      <h1>Get Started</h1>
    </div>
  );
  const display5 = (
    <div className="DisplayCard">
      <h1>Settings</h1>
    </div>
  );
  return (
    <div className="App">
      <Sidebar
        activeBtn={activeBtn}
        setActivebtn={setActivebtn}
        openMenu={openMenu}
        setShowDropdown={setShowDropdown}
        passUserRegisterNameSignUp={passUserRegisterNameSignUp}
        setPassUserRegisterNameSignUp={setPassUserRegisterNameSignUp}
        
        
        
      />

      <div className="joined-container">
        <Header
          activeBtn={activeBtn}
          setActivebtn={setActivebtn}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />

        {activeBtn === null ? <StatCard /> : null}

        {activeBtn === 0 && display1}
        {activeBtn === 1 && display2}
        {activeBtn === 2 && display3}
        {activeBtn === 3 && display4}
        {activeBtn === 4 && display5}
      </div>
    </div>
  );
};

export default Dashboard;
