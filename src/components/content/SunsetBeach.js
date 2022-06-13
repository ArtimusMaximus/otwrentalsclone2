import React from 'react';
import Sidebar from '../Sidebar';
import img2 from './images/sunsetbeachimages/2.webp';
import imgtwo from './images/sunset2ndrental/2.webp';
import { Link } from 'react-router-dom';


function SunsetBeach() {

    const styles = {
        height: '225px',
        width: '100%'
    }
    const figureStyles = {
        overflow: 'hidden',
        backgroundSize: 'contain',
    }
    const hrStyles = {
        borderLeft: '1px solid grey',
        height: '250px',
        borderStyle: 'inset'
    }
    
    return (
        <>
        <div className="row m-5 pb-1 image-fade-in">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
            
                <div className="card" style={{width: '36rem'}}>
                    <Link to="/sunsetbeach1">
                        <img className="card-img-top" src={img2} alt="Card image cap" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Price</h5>
                        <p className="card-text">3 Bed, 2 Bath</p>
                        
                        <p className="card-text addr">Sunset Beach, CA</p>
                    </div>
                </div>
            
            </div>
            
            <div className='col-12 col-md-6 col-lg-6 justify-content-center d-flex'>
            
                <div className="card" style={{width: '36rem'}}>
                    <Link to="/sunsetbeach2">
                    <img className="card-img-top" src={imgtwo} alt="Card image cap" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Price</h5>
                        <p className="card-text">5 Bed, 4.5 Bath</p>
                        
                        <p className="card-text addr">Sunset Beach, CA</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='row justify-content-center d-flex text-center'>
                <h3>
                    SUNSET BEACH VACATION HOMES
                </h3>
        </div>
        <div className='row justify-content-center d-flex text-center'>      
                <h4>
                    16525 S. Pacific Ave, Sunset Beach
                </h4>  
        </div>
        </>
    )
}

export default SunsetBeach;