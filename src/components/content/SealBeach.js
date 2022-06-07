import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import VirtualTour from '../VirtualTour';
import SealBeachCaro from './carousels/SealBeachCaro';
import img0 from "./images/sealbeachimages/1.jpg"
import img1 from "./images/sealbeachimages/10.jpg"
import img2 from "./images/sealbeachimages/11.jpg"
import img3 from "./images/sealbeachimages/12.jpg"
import img4 from "./images/sealbeachimages/13.jpg"
import img5 from "./images/sealbeachimages/14.jpg"
import img6 from "./images/sealbeachimages/2.jpg"
import img7 from "./images/sealbeachimages/3.jpg"
import img8 from "./images/sealbeachimages/4.jpg"
import img9 from "./images/sealbeachimages/5.jpg"
import img10 from "./images/sealbeachimages/6.jpg"
import img11 from "./images/sealbeachimages/7.jpg"
import img12 from "./images/sealbeachimages/8.jpg"
import img13 from "./images/sealbeachimages/9.jpg"

const arr = [
    img0, img1, img2,
    img3, img4, img5,
    img6, img7, img8,
    img9, img10, img11,
    img12, img13
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
                SEAL BEACH, CALIFORNIA VACATION HOME 
            </h1>
            <h3>
                4 Bedroom, 5 Bath, 5000 sqft.
            </h3>
                <SealBeachCaro />
            <h4>
                430 Ocean Ave., Seal Beach, California
            </h4>
            <p>
                Villas of Mirada is just walking minutes away from Ritz Carlton Hotel. This Tuscan styled San Gorgonio model the largest, with attached casita is at the end of a cul-de-sec, at the highest location, affording the utmost privacy with unmatched views. It is loaded with top-of-the line finishes and upgrades throughout, including a gourmet kitchen worthy of a professional chef! Two stone fireplaces, including one in the covered, outdoor loggia, off of the great room and master. Custom infinity pool and spa look out to gorgeous mountain views and city lights. This is a private, intimate neighborhood located only minutes from Restaurant Row, theatres and shopping. A homeowners dream!
            </p>
            <hr />
        </div>
        
        
            <div className='col-12 col-md-6 col-lg-6 text-center'>
                
                <VirtualTour />
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
