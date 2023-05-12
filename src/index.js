import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Pages/home/Home';
import Projects from './Pages/Projects/Projects';
import './css/bootstrap/index.css';
import './css/mod/mod.css';
import './icons/remixicon.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Home  />} />
  <Route path="/projects" element={<Projects  />} />

  </Routes>
</BrowserRouter>
  </React.StrictMode>
);
