import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Motivo = () => {
  return (
    <div className="w-full h-screen color-principal1 p-40">
      <h1 className="text-4xl font-bold text-black">¿Por qué quiero pertenecer al grupo de frontend?</h1>
      <p className="text-3xl font-semibold text-slate-800 py-8 pl-8">
        Las oportunidades de crecer son los retos que busco superar. No quiero
        permanecer quieto mientras el mundo se desarrolla, y menos aun que las
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
