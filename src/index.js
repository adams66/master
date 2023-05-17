import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Pages/home/Home';
import Projects from './Pages/Projects/Projects';
import NotFound from "./Pages/NotFound/NotFound";
import Theme from './Pages/Theme/Theme';
import './css/bootstrap/index.css';
import './css/mod/mod.css';
import './icons/remixicon.css';
import ThemeSet from './ThemeSet/ThemeSet';


const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("dal-theme");

console.log(theme);




if(theme !== null && theme !== ""){



  root.render(

    <ThemeSet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/projects" element={<Projects  />} />
          <Route path="/*" element={<NotFound  />} />
        </Routes>
      </BrowserRouter>
    </ThemeSet>
    );
}


else{
  root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Theme  />} />
  </Routes>
</BrowserRouter>
  );
}

