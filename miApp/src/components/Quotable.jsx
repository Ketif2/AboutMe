import React, { useEffect, useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Quotable = ({ nextPath }) => {

    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    
    const new_quote = () => {
      axios.get('https://api.quotable.io/random').then(response => {
        setContent(response.data.content);
        setAuthor(response.data.author);
      }).catch(error => {
        console.log(error)
      })
    }

    useEffect(() => {
      new_quote();
    }, []);
    
  return (
    
    <div className='color-principal2 w-full h-screen p-48'>
        <h1 className='text-yellow-500 font-bold text-4xl pb-8'>Cita.</h1>
        <p className='text-white text-3xl font-semibold pb-4'>{content}</p>
        <span className='text-yellow-500 text-3xl font-semibold py-8'>Author: </span> <span className='text-3xl font-semibold text-white'>{author}</span>
        <div className='flex justify-end py-20'>
        <Link to={nextPath} className='btn-custom-yellow'>Siguiente</Link>
        </div>
    </div>
  )
}

export default Quotable