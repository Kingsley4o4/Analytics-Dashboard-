import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";

import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import Dashboard from "./component/DashboardComponent/Dashboard";

function App() {
    const [userRegisterNameSignUp, setUserRegisterNameSignUp] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp userRegisterNameSignUp={userRegisterNameSignUp} setUserRegisterNameSignUp={setUserRegisterNameSignUp}/>} />
        <Route path="/dashboard" element={<Dashboard userRegisterNameSignUp={userRegisterNameSignUp} setUserRegisterNameSignUp={setUserRegisterNameSignUp} />} />
      </Routes>
    </div>
  );
}

export default App;
