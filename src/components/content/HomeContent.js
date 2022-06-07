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
        
        <div className="row">
            <div className='col-12 col-md-6 col-lg-6'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0'>
                        <Link to="/sealbeach">
                        <figure className='figure1 m-1' style={styles}>
                            <img className='img1' src={sealbeach} style={styles} />
                            <figcaption className='figcap'>Seal Beach</figcaption>
                        </figure>
                        </Link>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0'>
                        <Link to="/sunsetbeach">
                        <figure className='figure1 m-1' style={styles}>
                            <img className='img1' src={sunsetb} style={styles} />
                            <figcaption>Sunset Beach</figcaption>
                        </figure>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0'>
                        <Link to="/ranchomirage">
                        <figure className='figure1 m-1' style={styles}>
                            <img className='img1' src={ranchomirage} style={styles} />
                            <figcaption>Rancho Mirage</figcaption>
                        </figure>
                        </Link>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0'>
                        <Link to="/coloradoriver">
                        <figure className='figure1 m-1' style={styles}>
                            <img className='img1' src={coloradoriver} style={styles} />
                            <figcaption>Colorado River</figcaption>
                        </figure>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <Link to="/lakearrowhead" style={styles}>
                        <figure className='figure1 m-1' style={styles}>
                            <img className='img1' src={lakearrowhead} style={styles} />
                            <figcaption>Lake Arrowhead</figcaption>
                        </figure>                 
                        </Link>  
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6">    
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