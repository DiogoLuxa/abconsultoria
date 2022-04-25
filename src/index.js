import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Servicos from './routes/Servicos';
import Contato from './routes/Contato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
