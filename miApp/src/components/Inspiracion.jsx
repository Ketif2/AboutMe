import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Inspiracion = () => {
  return (
    <div className="color-principal1 w-full h-screen p-36">
      <h1 className="text-4xl font-bold text-black">¿Mi sueño?</h1>
      <ul>
        <li>
          <p className="text-3xl font-semibold text-slate-800 py-8 pl-8">
            Basta con con abrir el celular para observar el mundo, pero el mundo
            no te observará de vuelta. ¡Hay que vivirlo! Alcanzar las nubes,
            finiquitar viajes, degustar nuevos sabores, conocer experiencias
            únicas, construir soluciones desde sus inicios y planear una mejora
            para el mundo sin dejar de moverme. Soy Kevin Revelo, al principio
            sabrás de mí por código y al terminar, por persona.
          </p>
        </li>
      </ul>
      <div className="flex justify-end">
        <Link to="/quotable3" className="btn-custom">
          Siguiente
        </Link>
      </div>
    </div>
  );
};

export default Inspiracion;
