import "./App.css";
import { useState } from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import StatCard from "./component/StatCard/StatCard";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Sidebar openMenu={openMenu} />

      <div className="joined-container">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <StatCard />
      </div>
    </div>
  );
}

export default App;
