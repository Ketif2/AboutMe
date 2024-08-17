import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import "../index.css";

const PaletaColores = () => {

  const [backgroundColor, setBackgroundColor] = useState('#FFD83B');
  const [titleColor, setTitleColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#1E293B');

  return (
    <div className="color-principal1 w-full h-screen p-36">
    <h1>Paleta de Colores</h1>
    <p>Setea el color deseado</p>
    <div>

    </div>
  </div>
  )
}

export default PaletaColores