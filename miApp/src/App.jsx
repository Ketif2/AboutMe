import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./components/Presentation";
import Quotes from "./components/Quotes";
import AboutMe from "./components/AboutMe";
import Inspiration from "./components/Inspiration";
import ColorPalette from "./components/ColorPalette";
import Purpose from "./components/Purpose";
import { ColorProvider } from"./context/ColorContext"; 

function App() {
  return (
    <Router>
      <ColorProvider> 
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/quotable1" element={<Quotes nextPath="/aboutme" />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/quotable2" element={<Quotes nextPath="/inspiracion" />}/>
        <Route path="/inspiracion" element={<Inspiration />} />
        <Route path="/quotable3" element={<Quotes nextPath="/motivo" />}/>
        <Route path="/motivo" element={<Purpose />} />
        <Route path="/quotable4" element={<Quotes nextPath="/paletacolores" />}/>
        <Route path="/paletacolores" element={<ColorPalette />} />
      </Routes>
      </ColorProvider>
    </Router>
  );
}

export default App;
