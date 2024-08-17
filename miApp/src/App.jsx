import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentacion from "./components/Presentacion";
import Citas from "./components/Citas";
import SobreMi from "./components/SobreMi";
import Inspiracion from "./components/Inspiracion";
import PaletaColores from "./components/PaletaColores";
import Motivo from "./components/Motivo";
import { ColorProvider } from"./context/ColorContexto"; 

function App() {
  return (
    <Router>
      <ColorProvider> 
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/quotable1" element={<Citas nextPath="/aboutme" />} />
        <Route path="/aboutme" element={<SobreMi />} />
        <Route path="/quotable2" element={<Citas nextPath="/inspiracion" />}/>
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/quotable3" element={<Citas nextPath="/motivo" />}/>
        <Route path="/motivo" element={<Motivo />} />
        <Route path="/quotable4" element={<Citas nextPath="/paletacolores" />}/>
        <Route path="/paletacolores" element={<PaletaColores />} />
      </Routes>
      </ColorProvider>
    </Router>
  );
}

export default App;
