import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { StoreContext } from "./contexts";
import { account } from "./appwrite/configs";
import Register from "./pages/Register";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>();
  useEffect(() => {
    account
      .get()
      .then((user: any) => {
        setCurrentUser(user);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return (
    <StoreContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StoreContext.Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
