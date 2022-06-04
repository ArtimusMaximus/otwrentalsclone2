import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Outlet />
      <Footer />
    </div> 
    </>
  );
}

export default App;
