import React from 'react';
import Sidebar from '../Sidebar';
import './homecontent.css';
import { Link } from 'react-router-dom'
import coloradoriver from './images/homepageimages/coloradoriver.jpg'
import lakearrowhead from './images/homepageimages/lakearrow.jpg'
import ranchomirage from './images/homepageimages/ranchomirage.jpg'
import sealbeach from './images/homepageimages/sealbeach.jpg'
import sunsetb from './images/homepageimages/sunsetb.jpg'
import img9 from "./images/sunset2ndrental/18.webp"
import img7 from './images/coloradoriverimages/7.webp';
import img0 from "./images/sunset2ndrental/10.webp"
import ssb1 from "./images/sunsetbeachimages/11.webp"

function HomeContent() {

    const styles = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <>
        <div className='faded' style={{margin: '1rem', borderRadius: '5px', zIndex:'1'}} name={'top'}>
        <h1 className='text-center d-flex align-items-center justify-content-center otw'>On The Water Rentals - Beach Front Properties</h1>
        <h2 className='text-center d-flex align-items-center justify-content-center otwmobile'>Beach Front Properties</h2>
        
        </div>
                <div className='row image-fade-in'>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                            <div className="card bx" style={{width: '25rem'}}>
                            <Link to="/sealbeach" style={{styles}}>
                                <img className="card-img-top" src={sealbeach} alt="Card image cap" style={{height: '14rem'}} />
                            </Link>
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text rooms">4 Bed, 5 Bath</p>
                                    <p className="card-text addr">Seal Beach, CA</p>
                                </div>
                            </div>
                    </div>
                    
                    
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        <div className="card" style={{width: '25rem'}}>
                                <Link to="/sunsetbeach1">
                                <img className="card-img-top" src={ssb1} alt="Card image cap" style={{height: '14rem'}} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text rooms">3 Bed, 2 Bath</p>
                                    
                                    <p className="card-text addr">Sunset Beach, CA</p>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        <div className="card" style={{width: '25rem'}}>
                                <Link to="/sunsetbeach2">
                                <img className="card-img-top" src={img0} alt="Card image cap" style={{height: '14rem'}} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text rooms">5 Bed, 4.5 Bath</p>
                                    
                                    <p className="card-text addr">Sunset Beach, CA</p>
                                </div>
                        </div>
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/ranchomirage">
                                <img className="card-img-top" src={ranchomirage} alt="Card image cap" style={{height: '14rem'}} />
                            </Link>        
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text rooms">4 bedroom 4 bathroom</p>
                                    <p className="card-text addr">Rancho Mirage, CA</p>
                                    
                                </div>
                            </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/lakearrowhead" style={styles}>
                                <img className="card-img-top" src={lakearrowhead} alt="Card image cap" style={{height: '14rem'}} />
                            </Link>    
                                <div className="card-body">
                                    <h5 className="card-title">$</h5>
                                    <p className="card-text rooms">4 bedroom 5.5 bathroom</p>
                                    <p className="card-text addr">Lake Arrowhead, CA</p>
                                </div>
                        </div>               
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center p-1'>
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/coloradoriver2" style={{styles}}>
                                <img className="card-img-top" src={coloradoriver} alt="Card image cap" style={{height: '14rem'}} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">$</h5>
                                <p className="card-text rooms">4 Bed, 3 Bath</p>
                                <p className="card-text addr">Mohave Valley, AZ</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12 col-md-12 col-lg-12 d-flex justify-content-center p-1'>
                    
                        <div className="card" style={{width: '25rem'}}>
                            <Link to="/coloradoriver1" style={{styles}}>
                                <img className="card-img-top" src={img7} alt="Card image cap" style={{height: '14rem'}} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">$</h5>
                                <p className="card-text">3 Bed, 2 Bath</p>
                                <p className="card-text addr">Mohave Valley, AZ</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className='row faded' style={{margin: '1rem', borderRadius: '5px'}}>
                    <div className="col-12 col-md-12 col-lg-12 text-center">    
                        <h1>
                            Best Beach House Rentals
                            in the USA
                        </h1>
                        <p>
                            On the Water Rentals has some of the best beach house rentals in the USA. We maintain several beachfront / waterfront rental homes in vastly different settings. Our Sunset Beach vacation rentals and Seal Beach vacation rentals offer beachfront homes centrally located between Huntington Beach pier and Seal Beach pier.   Sunset beach and Seal Beach are two of the best beaches in southern California. Our Colorado River vacation rental homes are located minutes from Laughlin, Bullhead City, Needles, and Lake Havasu in near by Mohave Valley, AZ.  Our stunning Rancho Mirage compound with breathtaking views of the desert mountains is like no other.

                            For more information, please surf our web site or contact us at your convenience. We will be happy to answer any questions you may have.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'><a href={'#top'} style={{
                        textDecoration: 'none', 
                        color:'black', 
                        marginBottom: '0 !important'
                    }}><h2 className='anch' style={{display: 'none'}}>Back To Top</h2></a></div>
            
        </>
    )
}

export default HomeContent;