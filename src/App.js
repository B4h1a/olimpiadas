import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Bar from "./pages/Bar";

function App() {
  return (
    <Router>
      <div className="App">
        <Bar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Futsal" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
