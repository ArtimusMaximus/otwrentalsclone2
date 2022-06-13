import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import VirtualTour from '../VirtualTour';
import BookingInfo from './BookingInfo';
import RanchoCaro from './carousels/RanchoCaro';
import img0 from "./images/ranchomirageimages/1.jpg"
import img1 from "./images/ranchomirageimages/10.jpg"
import img2 from "./images/ranchomirageimages/11.jpg"
import img3 from "./images/ranchomirageimages/12.jpg"
import img4 from "./images/ranchomirageimages/13.jpg"
import img5 from "./images/ranchomirageimages/14.jpg"
import img6 from "./images/ranchomirageimages/15.jpg"
import img7 from "./images/ranchomirageimages/16.jpg"
import img8 from "./images/ranchomirageimages/17.jpg"
import img9 from "./images/ranchomirageimages/18.jpg"
import img10 from "./images/ranchomirageimages/19.jpg"
import img11 from "./images/ranchomirageimages/2.jpg"
import img12 from "./images/ranchomirageimages/20.jpg"
import img13 from "./images/ranchomirageimages/21.jpg"
import img14 from "./images/ranchomirageimages/22.jpg"
import img15 from "./images/ranchomirageimages/23.jpg"
import img16 from "./images/ranchomirageimages/24.jpg"
import img17 from "./images/ranchomirageimages/25.jpg"
import img18 from "./images/ranchomirageimages/26.jpg"
import img19 from "./images/ranchomirageimages/27.jpg"
import img20 from "./images/ranchomirageimages/28.jpg"
import img21 from "./images/ranchomirageimages/29.jpg"
import img22 from "./images/ranchomirageimages/3.jpg"
import img23 from "./images/ranchomirageimages/30.jpg"
import img24 from "./images/ranchomirageimages/31.jpg"
import img25 from "./images/ranchomirageimages/32.jpg"
import img26 from "./images/ranchomirageimages/33.jpg"
import img27 from "./images/ranchomirageimages/34.jpg"
import img28 from "./images/ranchomirageimages/35.jpg"
import img29 from "./images/ranchomirageimages/36.jpg"
import img30 from "./images/ranchomirageimages/37.jpg"
import img31 from "./images/ranchomirageimages/38.jpg"
import img32 from "./images/ranchomirageimages/39.jpg"
import img33 from "./images/ranchomirageimages/4.jpg"
import img34 from "./images/ranchomirageimages/40.jpg"
import img35 from "./images/ranchomirageimages/41.jpg"
import img36 from "./images/ranchomirageimages/42.jpg"
import img37 from "./images/ranchomirageimages/43.jpg"
import img38 from "./images/ranchomirageimages/44.jpg"
import img39 from "./images/ranchomirageimages/45.jpg"
import img40 from "./images/ranchomirageimages/46.jpg"
import img41 from "./images/ranchomirageimages/47.jpg"
import img42 from "./images/ranchomirageimages/48.jpg"
import img43 from "./images/ranchomirageimages/49.jpg"
import img44 from "./images/ranchomirageimages/5.jpg"
import img45 from "./images/ranchomirageimages/50.jpg"
import img46 from "./images/ranchomirageimages/51.jpg"
import img47 from "./images/ranchomirageimages/52.jpg"
import img48 from "./images/ranchomirageimages/53.jpg"
import img49 from "./images/ranchomirageimages/54.jpg"
import img50 from "./images/ranchomirageimages/55.jpg"
import img51 from "./images/ranchomirageimages/56.jpg"
import img52 from "./images/ranchomirageimages/57.jpg"
import img53 from "./images/ranchomirageimages/58.jpg"
import img54 from "./images/ranchomirageimages/59.jpg"
import img55 from "./images/ranchomirageimages/6.jpg"
import img56 from "./images/ranchomirageimages/7.jpg"
import img57 from "./images/ranchomirageimages/8.jpg"
import img58 from "./images/ranchomirageimages/9.jpg"

    const arr = [
        img0,  img1,  img2,  img3,  img4,
        img5,  img6,  img7,  img8,  img9,
        img10, img11, img12, img13, img14,
        img15, img16, img17, img18, img19,
        img20, img21, img22, img23, img24,
        img25, img26, img27, img28, img29,
        img30, img31, img32, img33, img34,
        img35, img36, img37, img38, img39,
        img40, img41, img42, img43, img44,
        img45, img46, img47, img48, img49,
        img50, img51, img52, img53, img54,
        img55, img56, img57, img58
    ];


function RanchoMirage() {
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
        <div className="row row-cols-2 image-fade-in">
        
            <div className="col-12 col-md-6 col-lg-6 text-center">
                
                <h4>
                    4 bedroom 4 bathroom 3800 sqft
                </h4>
                    <RanchoCaro />
                <h5>
                    35 Santa Rosa Mountain Lane., Rancho Mirage, California
                </h5>
                     <BookingInfo />
                <hr />
                <h3>
                    RANCHO MIRAGE HILLTOP MASTERPIECE 
                </h3>
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

export default RanchoMirage;