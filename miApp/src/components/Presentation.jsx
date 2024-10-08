import React from 'react'
import { Link } from 'react-router-dom';
import actualImage from '../assets/Retrato.png';
import { useColors } from'../context/ColorContext';

const Presentation = () => {
  const { backgroundColor, titleColor, textColor } = useColors();

  return (
    <div style={{background: backgroundColor }} className='grid grid-cols-3 gap-4 p-24 w-full h-screen'>
      <div className=' col-span-2'>
      <h1 style={{color:titleColor}} className='text-4xl font-bold pl-6'>¡Hola!</h1>
        <p style={{color: textColor}} className='text-3xl font-semibold py-8'>Seguiremos de forma rápida quién soy y por qué estoy entusiasmado en ser parte de este evento.</p>
        <div>
          <h2 style={{color:titleColor}} className='font-bold text-3xl pl-6'>Contacto</h2>
          <ul style={{color: textColor}} className='pl-20 font-semibold text-slate-700 text-2xl'>
            <li className='pt-7'>Github: 
            <a href="https://github.com/Ketif2"> github.com/Ketif2</a>
            </li>
            <li className='pt-6'>Correo: kevrevelo@hotmail.com</li>
            <li className='pt-6'>Celular: +593 962935347</li>
            <li className='pt-6'>Linkedin: 
            <a href="https://www.linkedin.com/in/kevin-revelo-flores-820262295/"> linkedin.com/kevin-revelo-flores</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <img src={actualImage} alt="Imagen Retrato Kevin Revelo" width="230"/>
        <Link to="/quotable1" className='btn-custom'>Siguiente</Link>
      </div>
      
    </div>
  )
}

export default Presentation