import React from 'react';
import { Link } from 'react-router-dom';
import img7 from './images/coloradoriverimages/7.webp';
import img10 from './images/colorado2ndrental/10.jpg';




export default () => {
    
    const styles = {
        height: '225px',
        width: '100%'
    };
    const figureStyles = {
        overflow: 'hidden',
        backgroundSize: 'contain',
        
    };
    
    return (
        <>
        
        <div className="row m-5 p-1 image-fade-in">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
            <div className="card" style={{width: '36rem'}}>
                            <Link to="/coloradoriver2" style={{styles}}>
                                <img className="card-img-top" src={img10} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Price</h5>
                                <p className="card-text">4 Bed, 3 Bath</p>
                                <p className="card-text addr">Mohave Valley, AZ</p>
                            </div>
                        </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6 justify-content-center d-flex'>
            <div className="card" style={{width: '36rem'}}>
                            <Link to="/coloradoriver1" style={{styles}}>
                                <img className="card-img-top" src={img7} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Price</h5>
                                <p className="card-text">3 Bed, 2 Bath</p>
                                <p className="card-text addr">Mohave Valley, AZ</p>
                            </div>
                        </div>
            </div>
        </div>
        <hr />
        <div className='row justify-content-center d-flex text-center'>
                <h3>
                    COLORADO RIVER VACATION HOMES 
                </h3>
        </div>
        <div className='row justify-content-center d-flex text-center'>      
                <h4>
                    1328 E Dike Rd. Mohave Valley, Arizona & 1326 E Dike Rd. Mohave Valley, Arizona
                </h4>  
        </div>
        </>
    )
}
