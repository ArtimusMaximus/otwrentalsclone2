import React from 'react';
import { Link } from 'react-router-dom';
import img7 from './images/coloradoriverimages/7.webp';
import img10 from './images/colorado2ndrental/10.jpg';




export default () => {
    
    const styles = {
        height: '225px'
    };
    const figureStyles = {
        overflow: 'hidden',
        backgroundSize: 'contain',
        
    };
    
    return (
        <>
        <div className='row justify-content-center d-flex text-center'>
                <h1>
                    COLORADO RIVER VACATION HOMES 
                </h1>
        </div>
        <div className='row justify-content-center d-flex'>      
                <h3>
                    1326 E Dike Rd. Mohave Valley, Arizona & 1328 E Dike Rd. Mohave Valley, Arizona 
                </h3>  
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex p-0">
            <Link to="/coloradoriver1">
                <figure className='m-1' style={figureStyles}>
                    <figcaption>3 Bedrooms, 2 Baths (Sleeps 10) 1900 sqft.</figcaption>
                    <img src={img7} style={styles} />
                </figure>
            </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-6 justify-content-center d-flex p-0'>
            <Link to="/coloradoriver2">
                <figure className='m-1' style={figureStyles}>
                    <figcaption>4 Bedrooms, 3 Baths (Sleeps 12) 4000 sqft.</figcaption>
                    <img src={img10} style={styles} />
                </figure>
            </Link>
            </div>
        </div>
        </>
    )
}
