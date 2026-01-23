import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import StatCard from "./component/StatCard/StatCard";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="joined-container">
        <Header />
        <StatCard />
      </div>
    </div>
  );
}

export default App;
