import React from "react";
import { Link } from "react-router-dom";
import { useColors } from'../context/ColorContext';

const Motivo = () => {

  const { backgroundColor, titleColor, textColor } = useColors();

  return (
    <div style={{background: backgroundColor }} className="w-full h-screen color-principal1 p-40">
      <h1 style={{color:titleColor}} className="text-4xl font-bold text-black">¿Por qué quiero pertenecer al grupo de frontend?</h1>
      <p style={{color: textColor}} className="text-3xl font-semibold text-slate-800 py-8 pl-8">
        Las oportunidades de crecer son los retos que busco superar. No quiero
        permanecer quieto mientras el mundo se desarrolla, y menos aun cuando las
        olas de las nuevas generaciones están en su cúspide, por lo que, busco
        de este proyecto y motivación, abrirme paso para el futuro que anhelo.
      </p>
      <div className="flex justify-end">
        <Link to="/quotable4" className="btn-custom">
          Siguiente
        </Link>
      </div>
    </div>
  );
};

export default Motivo;
