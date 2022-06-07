import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import SunsetBeach from './components/content/SunsetBeach';
import SealBeach from './components/content/SealBeach';
import HomeContent from './components/content/HomeContent';
import ColoradoRiver from './components/content/ColoradoRiver';
import ColoImages from './components/content/ColoImages';
import RanchoMirage from './components/content/RanchoMirage';
import LakeArrowHead from './components/content/LakeArrowhead';
import LakeArrowImages from './components/content/LakeArrowImages';
import ContactInfo from './components/content/ContactInfo';
import SunsetB1 from './components/content/SunsetB1';
import SunsetB2 from './components/content/SunsetB2';
import ColoR1 from './components/content/ColoR1';
import ColoR2 from './components/content/ColoR2';
import NoLink from './components/content/images/NoLink';
import AllToursVids from './components/AllToursVids';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomeContent />} /> 
        <Route path="/sunsetbeach" element={<SunsetBeach />} />
        <Route path="/sunsetbeach1" element={<SunsetB1 />} />
        <Route path="/sunsetbeach2" element={<SunsetB2 />} />
        <Route path="/sealbeach" element={<SealBeach />} />
        <Route path="/coloradoriver" element={<ColoradoRiver />} />
        <Route path="/coloradoriver1" element={<ColoR1 />} />
        <Route path="/coloradoriver2" element={<ColoR2 />} />
        <Route path="/ranchomirage" element={<RanchoMirage />} />
        <Route path="/lakearrowhead" element={<LakeArrowHead />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/nolink" element={<NoLink />} />
        <Route path="/3dtoursvids" element={<AllToursVids />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
);


