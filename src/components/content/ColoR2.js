import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import VirtualTour from '../VirtualTour';
import RanchoCaro from './carousels/RanchoCaro';
import img0 from "./images/colorado2ndrental/1.jpg"
import img1 from "./images/colorado2ndrental/2.jpg"
import img3 from "./images/colorado2ndrental/4.jpg"
import img5 from "./images/colorado2ndrental/6.jpg"
import img7 from "./images/colorado2ndrental/8.jpg"


const arr = [
    img0,  img1,
    img3,  img5, 
    img7
    
];


export default () => {

    const [modalData, setModalData] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const thumbStyles = {
        height: '50px',
        width: '75px',
        margin: '5px',
        borderRadius: '5px'
    };
    const modalStyles = {
        width: '100%',
        margin: '5px',
        borderRadius: '5px'
    }


    return (
        <>
        <div className="row row-cols-2">
        
            <div className="col-12 col-md-6 col-lg-6 text-center">
                <h1>
                    COLORADO RIVER VACATION HOMES 
                </h1>
                <h3>
                    4 Bedrooms, 3 Baths (Sleeps 12) 4000 sqft.
                </h3>
                    <RanchoCaro />
                <h4>
                    1328 E Dike Rd., Mohave Valley, Mohave County, AZ USA
                </h4>
                <a className='btn btn-primary' href={''}>Booking Info</a>
                <p>
                    1328 Dike Rd. is a nice 4000 sqft. home.  It features 4 bedrooms 3 bathrooms, , living room, kitchen and breakfast nook and custom BBQ.  It is equipped with central air and is fully furnished to accommodate any length of stay.  Property features a private dock which can park 2 boats and personal water craft.  Sleeps 12 in beds.
                </p>
                <hr />
            </div>
                <div className='col-12 col-md-6 col-lg-6 text-center'>
                    {/* <VirtualTour /> */}
                    <hr />
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 container'>
                            <h1>Photo Gallery</h1>
                            <div className='row d-flex justify-content-center'>
                            {arr.map((img, i) => {
                                return (
                                    <div key={i}>
                                        <a className='d-block h-100' onClick={() => {setShowModal(true); setModalData(img)}}>
                                            <img className='img-fluid' src={img} style={thumbStyles} />
                                        </a>
                                    </div>
                                )
                            })}
                            </div>
                            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Body>{<img src={modalData} style={modalStyles} />}</Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}