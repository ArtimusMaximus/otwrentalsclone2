import React from 'react';
import Sidebar from '../Sidebar';
import img2 from './images/sunsetbeachimages/2.webp';
import imgtwo from './images/sunset2ndrental/2.webp';
import { Link } from 'react-router-dom';


function SunsetBeach() {

    const styles = {
        height: '225px'
    }
    
    return (
        <>
        <div className='row justify-content-center d-flex'>
                <h1>
                    SUNSET BEACH VACATION HOMES
                </h1>
        </div>
        <div className='row justify-content-center d-flex'>      
                <h3>
                    16525 S. Pacific Ave., Sunset Beach
                </h3>  
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center">
            <Link to="/sunsetbeach1">
                <figure className='m-0 p-0'>
                    <figcaption>Three Bedroom, Two Bath</figcaption>
                <img src={img2} style={styles} />
                </figure>
            </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-6 justify content-center'>
            <Link to="/sunsetbeach2">
                <figure className='m-0 p-0'>
                    <figcaption>Five Bedroom, 4.5 Bath</figcaption>
                <img src={imgtwo} style={styles} />
                </figure>
            </Link>
            </div>
        </div>
        </>
    )
}

export default SunsetBeach;