import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./components/Presentation";
import Quotable from "./components/Quotable";
import AboutMe from "./components/AboutMe";
import Inspiracion from "./components/Inspiracion";
import PaletaColores from "./components/PaletaColores";
import Motivo from "./components/Motivo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/quotable1" element={<Quotable nextPath="/aboutme" />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/quotable2" element={<Quotable nextPath="/inspiracion" />}/>
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/quotable3" element={<Quotable nextPath="/motivo" />}/>
        <Route path="/motivo" element={<Motivo />} />
        <Route path="/quotable4" element={<Quotable nextPath="/paletacolores" />}/>
        <Route path="/paletacolores" element={<PaletaColores />} />
      </Routes>
    </Router>
  );
}

export default App;
