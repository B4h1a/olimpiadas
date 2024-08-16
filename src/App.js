import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bar from "./pages/Bar";
import FaseGrupo from "./pages/FaseGrupo";
import Futsal from "./pages/Futsal";
import Volei from "./pages/volei";
import Queimada from "./pages/queimada";
import Futmesa from "./pages/futmesa";
import Basquete from "./pages/basquete";
import Tenis from "./pages/tenis";
import Atletismo from "./pages/atletismo";
import Handebol from "./pages/handebol";
import Informacoes from "./pages/informacoes";

function App() {
  return (
    <Router>
      <div className="App">
        <Bar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/informacoes" element={<Informacoes/>} />
          <Route path="/Futsal" element={<Futsal />} />
          <Route path="/Vôlei" element={<Volei />} />
          <Route path="/Queimada" element={<Queimada />} />
          <Route path="/Atletismo" element={<Atletismo />} />
          <Route path="/Basquete" element={<Basquete />} />
          <Route path="/Handebol" element={<Handebol />} />
          <Route path="/Tênis/Mesa" element={<Tenis />} />
          <Route path="/Futmesa" element={<Futmesa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
