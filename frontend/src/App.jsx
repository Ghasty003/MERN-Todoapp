import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="signup" element={!user ?<Signup /> : <Navigate to="/" /> } />
          <Route path="login" element={!user ?<Login /> : <Navigate to="/" /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
