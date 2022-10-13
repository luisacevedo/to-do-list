import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import '../stylesheets/Tarea.css'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={`contenedor-tarea${ completada ? ' completada' : ''}`}>
      <div 
        className='texto-tarea'
        onClick={() => completarTarea(id)}>
        { texto }
      </div>
      <div 
        className='contenedor-iconos-tarea'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='icono-tarea'/>
      </div>
    </div>
  );
}

export default Tarea;