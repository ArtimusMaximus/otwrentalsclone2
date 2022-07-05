import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Carousel from './components/content/carousels/LakeArrowCarousel';
import VirtualTour from './components/VirtualTour';


function App() {
  return (
    <>
      
      <div className='background'>
      <Navbar />
        <div className="App">
          
          <div className="container" style={{marginBottom: '125px', marginTop: '5px'}}>
            <Outlet />
          </div>  
          
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
