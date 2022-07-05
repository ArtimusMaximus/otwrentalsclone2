import React, { useState } from 'react';
import { desc } from './propertyDesc';
import Pagination from '../Pagination';
import TextPagi from '../TextPagi';
import BookingInfo from './BookingInfo';
import img0 from "./images/coloradoriverimages/9.webp"
import img1 from "./images/coloradoriverimages/10.webp"
import img2 from "./images/coloradoriverimages/11.webp"
import img3 from "./images/coloradoriverimages/8.webp"
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
import img14 from "./images/coloradoriverimages/12.webp"
import img15 from "./images/coloradoriverimages/1.webp"
import ColoCaro1 from './carousels/ColoCaro1';

const arr = [
    img0,  img1,  img2,
    img3,  img4,  img5,
    img6,  img7,  img8,
    img9,  img10, img11,
    img12, img13, img14,
    img15
];


function ColoradoRiver() {



    return (
        <>
        <div className="row row-cols-2 image-fade-in">
        
            <div className="col-12 col-md-6 col-lg-6 text-center">
                
                
                    <ColoCaro1 />
                <div className='faded'>
                <h4>
                    3 Bedr, 2 Baths 1900 sqft.
                </h4>
                <h5>
                    1326 E Dike Rd. Mohave Valley, Arizona
                </h5>
                <BookingInfo />
                <hr />
                <h5>
                    COLORADO RIVER VACATION HOMES 
                </h5>
                <p className='p-2'>
                    <TextPagi text={desc.coloRiver1Desc} />
               </p>
                </div>
                <hr />
            </div>
                <div className='col-12 col-md-6 col-lg-6 text-center'>
                    {/* <VirtualTour /> */}
                    <hr />
                    <Pagination arr={arr} totalImgs={arr.length} />
                </div>
                <hr />
            </div>
        </>
    )
}

export default ColoradoRiver;