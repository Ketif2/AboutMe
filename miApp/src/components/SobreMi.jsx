import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";
import { useColors } from'../context/ColorContexto';

const AboutMe = () => {

  const { backgroundColor, titleColor, textColor } = useColors();

  return (
    <div style={{background: backgroundColor }} className="w-full h-screen p-40">
      <h1 style={{color:titleColor}} className="text-4xl font-bold text-black">Sobre mí</h1>
      <p style={{color:textColor}} className="text-3xl font-semibold text-slate-800 py-8 pl-8">
        Soy un joven apasionado por la música y todo lo que transmite, las
        aventuras y sus experiencias que mejoran mi percepción de la vida, y la
        tecnología con su capacidad de revolucionar el mundo. Busco mejorar cada
        día con cada lección, aprovechar las oportunidades presentes, y conseguir
        objetivos que me ayudarán a lograr mi sueño.
      </p>
      <div className="flex justify-end">
        <Link to="/quotable2"  className="btn-custom">
          Siguiente
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
