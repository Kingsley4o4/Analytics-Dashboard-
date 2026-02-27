import "./App.css";
import { useState } from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import StatCard from "./component/StatCard/StatCard";
import { AppWindow, Sliders } from "lucide-react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeBtn, setActivebtn] = useState(null);

  

  const display1 = (
    <div>
      <h1>Library</h1>
    </div>
  );
  const display2 = (
    <div>
      <h1>people</h1>
    </div>
  );

  const display3 = (
    <div>
      <h1>Activites</h1>
    </div>
  );

  const display4 = (
    <div>
      <h1>Get Started</h1>
    </div>
  );
  const display5 = (
    <div>
      <h1>Settings</h1>
    </div>
  );

  return (
    <div className="App">
      <Sidebar
        activeBtn={activeBtn}
        setActivebtn={setActivebtn}
        openMenu={openMenu}
      />

      <div className="joined-container">

        {activeBtn === null ? <Header /> : null}
       
        

        {activeBtn === null ? <StatCard /> : null}

        {activeBtn === 0 && display1}
        {activeBtn === 1 && display2}
        {activeBtn === 2 && display3}
        {activeBtn === 3 && display4}
        {activeBtn === 4 && display5}

        {/* { activeBtn === 2 && display3} */}
      </div>
    </div>
  );
}

export default App;
