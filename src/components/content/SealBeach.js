import Pagination from '../Pagination';
import TextPagi from '../TextPagi';
import React, { useState } from 'react';
import { desc } from './propertyDesc';
import VirtualTour from '../VirtualTour';
import BookingInfo from './BookingInfo';
import SealBeachCaro from './carousels/SealBeachCaro';
import img0 from "./images/sealbeachimages/1.jpg"
import img1 from "./images/sealbeachimages/3.jpg"
import img2 from "./images/sealbeachimages/11.jpg"
import img3 from "./images/sealbeachimages/12.jpg"
import img4 from "./images/sealbeachimages/13.jpg"
import img5 from "./images/sealbeachimages/14.jpg"
import img6 from "./images/sealbeachimages/2.jpg"
import img7 from "./images/sealbeachimages/10.jpg"
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

    return (
        <>
        <div className="row row-cols-2 image-fade-in">
        
        <div className="col-12 col-md-6 col-lg-6 text-center">
            
                <SealBeachCaro />
            <div className='faded'>
            <div className='row m-1'>
                <div className='text-left col-6'>
                    <h4>
                        4 Bedroom, 5 Bath
                    </h4>
                    <h5>5000 sqft.</h5>
                    <h4>
                        430 Ocean Ave 
                    </h4>
                    <h5>Seal&nbsp;Beach, CA</h5>
                </div>
                <div className='col-6 p-3'>
                    <BookingInfo />  
                    <div className='row'>
                        <div className='col-12 p-3'>
                            <a style={{color: 'white', backgroundColor: '#95d6fa'}} type='button' className='btn'>Check Availability</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h5>
                SEAL BEACH, CALIFORNIA VACATION HOME 
            </h5>
            <p className='p-2'>
                <TextPagi text={desc.sealBeachDesc} /> 
           </p>
            </div>
            <hr />
        </div>
        
        
            <div className='col-12 col-md-6 col-lg-6 text-center'>
                
                <VirtualTour />
                <hr />
                <Pagination arr={arr} totalImgs={arr.length} />
            </div>
            <hr />
        
    </div>
        </>
    )
}
