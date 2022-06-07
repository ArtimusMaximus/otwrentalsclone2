import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import VirtualTour from '../VirtualTour';
import LakeArrowCarousel from './carousels/LakeArrowCarousel';

import img0 from "./images/lakearrowimages/1.webp";
import img1 from "./images/lakearrowimages/10.webp";
import img2 from "./images/lakearrowimages/11.webp";
import img3 from "./images/lakearrowimages/12.webp";
import img4 from "./images/lakearrowimages/13.webp";
import img5 from "./images/lakearrowimages/14.webp";
import img6 from "./images/lakearrowimages/15.webp";
import img7 from "./images/lakearrowimages/16.webp";
import img8 from "./images/lakearrowimages/17.webp";
import img9 from "./images/lakearrowimages/18.webp";
import img10 from "./images/lakearrowimages/19.webp";
import img11 from "./images/lakearrowimages/2.webp";
import img12 from "./images/lakearrowimages/20.webp";
import img13 from "./images/lakearrowimages/21.webp";
import img14 from "./images/lakearrowimages/22.webp";
import img15 from "./images/lakearrowimages/23.webp";
import img16 from "./images/lakearrowimages/24.webp";
import img17 from "./images/lakearrowimages/25.webp";
import img18 from "./images/lakearrowimages/26.webp";
import img19 from "./images/lakearrowimages/27.webp";
import img20 from "./images/lakearrowimages/28.webp";
import img21 from "./images/lakearrowimages/29.webp";
import img22 from "./images/lakearrowimages/3.webp";
import img23 from "./images/lakearrowimages/30.webp";
import img24 from "./images/lakearrowimages/31.webp";
import img25 from "./images/lakearrowimages/32.webp";
import img26 from "./images/lakearrowimages/33.webp";
import img27 from "./images/lakearrowimages/34.webp";
import img28 from "./images/lakearrowimages/35.webp";
import img29 from "./images/lakearrowimages/36.webp";
import img30 from "./images/lakearrowimages/37.webp";
import img31 from "./images/lakearrowimages/38.webp";
import img32 from "./images/lakearrowimages/39.webp";
import img33 from "./images/lakearrowimages/4.webp";
import img34 from "./images/lakearrowimages/40.webp";
import img35 from "./images/lakearrowimages/41.webp";
import img36 from "./images/lakearrowimages/5.webp";
import img37 from "./images/lakearrowimages/6.webp";
import img38 from "./images/lakearrowimages/7.webp";
import img39 from "./images/lakearrowimages/8.webp";
import img40 from "./images/lakearrowimages/9.webp";

    const arr = [
        img0,  img1,  img2,  img3,
        img4,  img5,  img6,  img7,
        img8,  img9,  img10, img11,
        img12, img13, img14, img15,
        img16, img17, img18, img19,
        img20, img21, img22, img23,
        img24, img25, img26, img27,
        img28, img29, img30, img31,
        img32, img33, img34, img35,
        img36, img37, img38, img39,
        img40
    ];


function LakeArrowHead() {

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
                    STUNNING MOUNTAIN LAKEFRONT RETREAT
                </h1>
                <h3>
                    4 bedroom 5 1/2 bathroom 3000 sqft
                </h3>
                    <LakeArrowCarousel />
                <h4>
                    28961 North Shore Rd., Lake Arrowhead, California
                </h4>
                <p>
                    PERMITTED and LEGAL Rental. This three-story luxury home is nestled in a gated community upon a lush hillside property. Our home is lakefront with a short 100 yard walk to our own single slip dock. Lake Arrowhead is a private lake. For boat charters and water skiing, BEST option is to make arrangements with Mckenzie Water Ski School and they are fantastic! https://mckenziewaterskischool.com/ They can do boat charters, tours, skiing, wake board..etc!

                    Lake Arrowhead is flourished with trees and breathtaking scenery. This location is perfect for medium to larger-sized families. There is a private wooded path that leads you to a secluded shoreline along Lake Arrowhead. The yard is beautifully maintained complete with two lawn sides, BBQ, and lounging areas. There are multiple balconies allowing you to splendor over the beautifully landscaped grounds. Inside, you have access to a full-size wet bar for spirits. If you enjoy cooking, you can impress friends and family with fancy cuisine cooked up in the executive style kitchen. Afterward, you can play a fun game of Ping-Pong while listening to your favorite music on the central music system. Create a warm ambiance and wind down in the living room beside the fireplace while you watch a movie on the 70” flat screen television. Every aspect of this home offers a plethora of amenities. Be further impressed as this home has an additional sauna and a full-size laundry room. Every restroom has heated floors and every bedroom has its own television and bathroom complete with a rain shower. For additional comfort, each level has its own heat and air control.
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

export default LakeArrowHead;