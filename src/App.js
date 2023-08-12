import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShortner from "./Pages/UrlShortner";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/signIn" Component={Login} />
        <Route path="/user" Component={UrlShortner} />
        <Route path="/password-reset" Component={ForgotPassword}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
