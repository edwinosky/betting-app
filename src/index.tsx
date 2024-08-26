import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import App from './App';
import './index.css';
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;


// Crea un contenedor de raíz y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
