import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SunsetBeach from './components/content/SunsetBeach';
import SealBeach from './components/content/SealBeach';
import HomeContent from './components/content/HomeContent';
import ColoradoRiver from './components/content/ColoradoRiver';
import ColoImages from './components/content/ColoImages';
import RanchoMirage from './components/content/RanchoMirage';
import LakeArrowHead from './components/content/LakeArrowhead';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<HomeContent />} /> 
        <Route path="/sunsetbeach" element={<SunsetBeach />} />
        <Route path="/sealbeach" element={<SealBeach />} />
        <Route path="/coloradoriver" element={<ColoradoRiver images={<ColoImages />} />} />
        <Route path="/ranchomirage" element={<RanchoMirage />} />
        <Route path="/lakearrowhead" element={<LakeArrowHead />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
);


