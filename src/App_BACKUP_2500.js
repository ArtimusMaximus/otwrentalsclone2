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
<<<<<<< HEAD
    <Navbar />
    <div className="App col-12">
      <Outlet />
=======
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
        
        
>>>>>>> 227fe0cd863ade0f7755427f38d6025fde48c44e
      <Footer />
      </div> 
    </>
  );
}

export default App;
