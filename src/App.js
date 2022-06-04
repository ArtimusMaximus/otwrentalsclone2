import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Carousel from './components/content/carousels/LakeArrowCarousel';
import VirtualTour from './components/VirtualTour';


function App(props) {
  return (
    <>
      <Navbar />
      <div className="App">
        
      <div className="container">
        <Outlet />
      </div>  
        
      <Footer />
      </div> 
    </>
  );
}

export default App;
