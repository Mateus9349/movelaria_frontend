import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './components/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>
);


