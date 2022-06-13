import React from 'react';
import Sidebar from '../Sidebar';
import './homecontent.css';
import { Link } from 'react-router-dom'
import coloradoriver from './images/homepageimages/coloradoriver.jpg'
import lakearrowhead from './images/homepageimages/lakearrow.jpg'
import ranchomirage from './images/homepageimages/ranchomirage.jpg'
import sealbeach from './images/homepageimages/sealbeach.jpg'
import sunsetb from './images/homepageimages/sunsetb.jpg'


function HomeContent() {
    const styles = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1 shadow-sm'>
                            <div className="card bx" style={{width: '25rem'}}>
                            <Link to="/sealbeach" style={{styles}}>
                                <img className="card-img-top" src={sealbeach} alt="Card image cap" style={{height: '16rem'}} />
                            </Link>
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text">4 Bed, 5 Bath, 5000 sqft.</p>
                                    <p className="card-text addr">Seal Beach, CA</p>
                                    
                                </div>
                            </div>
                        
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        
                        <div className="card" style={{width: '25rem'}}>
                                <Link to="/sunsetbeach">
                                <img className="card-img-top" src={sunsetb} alt="Card image cap" style={{height: '16rem'}} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text">3 Bed, 2 Bath <b>or</b> 5 Bed, 4.5 Bath</p>
                                    
                                    <p className="card-text addr">Sunset Beach, CA</p>
                                </div>
                        </div>
                        
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/ranchomirage">
                                <img className="card-img-top" src={ranchomirage} alt="Card image cap" style={{height: '16rem'}} />
                            </Link>        
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text">4 bedroom 4 bathroom 3800 sqft</p>
                                    <p className="card-text addr">Rancho Mirage, CA</p>
                                    
                                </div>
                            </div>
                        
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center p-1'>
                        
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/coloradoriver" style={{styles}}>
                                <img className="card-img-top" src={coloradoriver} alt="Card image cap" style={{height: '16rem'}} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">$</h5>
                                <p className="card-text">3 Bed, 2 Bath <b>or</b> 4 Bed, 3 Bath</p>
                                <p className="card-text addr">Mohave Valley, AZ</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center p-1'>
                        
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/lakearrowhead" style={styles}>
                                <img className="card-img-top" src={lakearrowhead} alt="Card image cap" style={{height: '16rem'}} />
                            </Link>    
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text">4 bedroom 5.5 bathroom</p>
                                    <p className="card-text addr">Lake Arrowhead, CA</p>
                                </div>
                        </div>               
                          
                    </div>
                    
                </div>
                <div className='row' style={{backgroundColor: 'white', margin: '25px', borderRadius: '5px'}}>
                    <div className="col-12 col-md-12 col-lg-12 text-center">    
                        <h1>
                            Best Beach House Rentals
                            in the USA
                        </h1>
                        <p>
                            On the Water Rentals has some of the best beach house rentals in the USA. We maintain several beachfront / waterfront rental homes in vastly different settings. Our Sunset Beach vacation rentals and Seal Beach vacation rentals offer beachfront homes centrally located between Huntington Beach pier and Seal Beach pier.   Sunset beach and Seal Beach are two of the best beaches in southern California. Our Colorado River vacation rental homes are located minutes from Laughlin, Bullhead City, Needles, and Lake Havasu in near by Mohave Valley, AZ.  Our stunning Rancho Mirage compound with breathtaking view of the desert mountains is like no other.

                            For more information, please surf our web site or contact us at your convenience. We will be happy to answer any questions you may have.
                        </p>
                    </div>
                </div>
            
        </>
    )
}

export default HomeContent;