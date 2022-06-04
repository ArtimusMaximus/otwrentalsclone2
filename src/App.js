import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Carousel from './components/content/Carousel';
import VirtualTour from './components/VirtualTour';


function App(props) {
  return (
    <>
      <Navbar />
      <div className="App">
        
      
        <div className="row">
        {/* <div className='col-1 left-0'>
        <Sidebar />
        </div> */}
        
          <div className='col-md-6 col-lg-6 col-12'>
          <Carousel />
            <Outlet />
          </div>
        </div>


        <div className='col-md-6 col-lg-6 col-12'>
          <VirtualTour />
        </div>
        
        
      <Footer />
      </div> 
    </>
  );
}

export default App;
