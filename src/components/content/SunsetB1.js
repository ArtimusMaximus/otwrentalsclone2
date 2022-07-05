import React, { useState } from 'react';
import { desc } from './propertyDesc';
import Pagination from '../Pagination';
import TextPagi from '../TextPagi';
import VirtualTour from '../VirtualTour';
import BookingInfo from './BookingInfo';
import SunsetCaro1 from './carousels/SunsetCaro1';
import './modal.css'
import img0 from "./images/sunsetbeachimages/11.webp"
import img1 from "./images/sunsetbeachimages/10.webp"
import img2 from "./images/sunsetbeachimages/1.webp"
import img3 from "./images/sunsetbeachimages/12.webp"
import img4 from "./images/sunsetbeachimages/13.webp"
import img5 from "./images/sunsetbeachimages/14.webp"
import img6 from "./images/sunsetbeachimages/15.webp"
import img7 from "./images/sunsetbeachimages/16.webp"
import img8 from "./images/sunsetbeachimages/17.webp"
import img9 from "./images/sunsetbeachimages/18.webp"
import img10 from "./images/sunsetbeachimages/19.webp"
import img11 from "./images/sunsetbeachimages/2.webp"
import img12 from "./images/sunsetbeachimages/20.webp"
import img13 from "./images/sunsetbeachimages/21.webp"
import img14 from "./images/sunsetbeachimages/22.webp"
import img15 from "./images/sunsetbeachimages/23.webp"
import img16 from "./images/sunsetbeachimages/24.webp"
import img17 from "./images/sunsetbeachimages/25.webp"
import img18 from "./images/sunsetbeachimages/26.webp"
import img19 from "./images/sunsetbeachimages/27.webp"
import img20 from "./images/sunsetbeachimages/3.webp"
import img21 from "./images/sunsetbeachimages/4.webp"
import img22 from "./images/sunsetbeachimages/5.webp"
import img23 from "./images/sunsetbeachimages/6.webp"
import img24 from "./images/sunsetbeachimages/7.webp"
import img25 from "./images/sunsetbeachimages/8.webp"
import img26 from "./images/sunsetbeachimages/9.webp"


export default () => {

    const arr = [
        img0,  img1,  img2,  img3,
        img4,  img5,  img6,  img7,
        img8,  img9,  img10, img11,
        img12, img13, img14, img15,
        img16, img17, img18, img19,
        img20, img21, img22, img23,
        img24, img25, img26
    ]

    return (

        <>
        <div className="row row-cols-2 image-fade-in">
        
            <div className="col-12 col-md-6 col-lg-6 text-center">
                
                    <SunsetCaro1 />
                <div className='faded'>
                <h4>
                    3 bedroom 2 bathroom 1200 sqft
                </h4>
                <h5>
                    16525 S. Pacific Ave., Sunset Beach
                </h5>
                <BookingInfo />
                <hr />
                <h5>
                    BEACHFRONT DREAM HOME
                </h5>
                <p className='p-2'>
                    <TextPagi text={desc.ssb1Desc} /> 
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