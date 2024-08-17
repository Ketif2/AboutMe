import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useColors } from "../context/ColorContexto";

const PaletaColores = () => {
  const { backgroundColor, setBackgroundColor, titleColor, setTitleColor, textColor, setTextColor} = useColors();

  return (
    <div style={{ background: backgroundColor }} className="w-full h-screen p-16">
      <div className="grid grid-cols-3 pb-6">
      <h1 className="col-span-1 text-4xl font-bold" style={{ color: titleColor }}>
        Paleta de Colores
      </h1>
      <span style={{ color: textColor }} className="text-2xl col-span-2">
        En una orquesta, cada instrumento aporta un tono único, pero es la
        habilidad del director para armonizar estos sonidos lo que crea una
        sinfonía. Del mismo modo, cada color en una paleta tiene un propósito
        único, pero es la habilidad del senior de compartir sus conocimientos
         a los juniors lo que crea una sinfonía de colores.
      </span>
      </div>
      <div className="space-y-4">
        <div className="flex justify-around items-center text-3xl">
          <label
            style={{ color: textColor }}
            className="text-black font-semibold"
          >
            Cambiar fondo
          </label>
          <input
            type="color"
            className="w-12 h-12 border-2 border-black"
            style={{ background: backgroundColor}}
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <label className="bg-slate-300 text-black font-regular p-2 rounded-xl">
            {backgroundColor}
          </label>
          <div
            className="w-20 h-20 border-black rounded-xl"
            style={{ background: backgroundColor, border: "2px solid black" }}
          ></div>
        </div>

        <div className="flex justify-around items-center text-3xl py-2">
          <label
            style={{ color: textColor }}
            className="text-black font-semibold pr-2"
          >
            Cambiar títulos
          </label>
          <input
            type="color"
            className="w-12 h-12 border-2 border-black"
            style={{ background: titleColor}}
            value={titleColor}
            onChange={(e) => setTitleColor(e.target.value)}
          />
          <label className="bg-slate-300 text-black font-regular p-2 rounded-xl">
            {titleColor}
          </label>
          <h1 style={{ color: titleColor }} className="text-4xl font-bold">
            ¡Hola!
          </h1>
        </div>

        <div className="flex justify-around items-center text-3xl pt-2">
          <label
            style={{ color: textColor }}
            className="text-black font-semibold"
          >
            Cambiar textos
          </label>
          <input
            type="color"
            className="w-12 h-12 border-2 border-black"
            style={{ background: textColor}}
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <label className="bg-slate-300 text-black font-regular p-2 rounded-xl">
            {textColor}
          </label>
          <p style={{ color: textColor }} className="text-3xl font-semibold pb-8">Soy ...</p>   
        </div>

      </div>
      <div className="flex justify-end mt-10">
        <Link to="/" className="btn-custom">
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default PaletaColores;
