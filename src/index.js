import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './components/Logo.js';
import ListaDeTareas from './components/ListaDeTareas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaDeTareas />
    </div>
  </React.StrictMode>
);