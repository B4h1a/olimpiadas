import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bar from "./pages/Bar";
import FaseGrupo from "./pages/FaseGrupo";
import Futsal from "./pages/Futsal";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Bar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Futsal" element={<Futsal />} />
          <Route path="/Vôlei" element={<FaseGrupo />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
