import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import VirtualTour from '../VirtualTour';
import RanchoCaro from './carousels/RanchoCaro';
import BookingInfo from './BookingInfo';
import img0 from "./images/coloradoriverimages/1.webp"
import img1 from "./images/coloradoriverimages/10.webp"
import img2 from "./images/coloradoriverimages/11.webp"
import img3 from "./images/coloradoriverimages/12.webp"
import img4 from "./images/coloradoriverimages/13.webp"
import img5 from "./images/coloradoriverimages/14.webp"
import img6 from "./images/coloradoriverimages/15.webp"
import img7 from "./images/coloradoriverimages/16.webp"
import img8 from "./images/coloradoriverimages/2.webp"
import img9 from "./images/coloradoriverimages/3.webp"
import img10 from "./images/coloradoriverimages/4.webp"
import img11 from "./images/coloradoriverimages/5.webp"
import img12 from "./images/coloradoriverimages/6.webp"
import img13 from "./images/coloradoriverimages/7.webp"
import img14 from "./images/coloradoriverimages/8.webp"
import img15 from "./images/coloradoriverimages/9.webp"

const arr = [
    img0,  img1,  img2,
    img3,  img4,  img5,
    img6,  img7,  img8,
    img9,  img10, img11,
    img12, img13, img14,
    img15
];


function ColoradoRiver() {

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
                    3 Bedrooms, 2 Baths (Sleeps 10) 1900 sqft.
                </h3>
                    <RanchoCaro />
                <h4>
                    1326 E Dike Rd. Mohave Valley, Arizona
                </h4>
                <BookingInfo />
                <p>
                    Our Colorado river front vacation rental homes are located minutes from Laughlin, Bullhead City and Lake Havasu in near by Mohave Valley, AZ. This vacation rental property contains park like settings with manicured lawn.  Many palm trees accented with night-lights located throughout grounds.  River rentals also feature private docks with parking for boats and personal water craft.   Both Colorado river rental homes feature central air & heat and are fully furnished including all appliances, washer & dryer, TV’s and outdoor charcoal BBQ.  Homes have an incredible view of the Colorado river and mountains and are located only a few feet from the water. 
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

export default ColoradoRiver;