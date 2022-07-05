import React from 'react';
import { desc } from './propertyDesc';
import Pagination from '../Pagination';
import TextPagi from '../TextPagi';
import BookingInfo from './BookingInfo';
import img0 from "./images/colorado2ndrental/1.jpg";
import img1 from "./images/colorado2ndrental/2.jpg";
import img2 from "./images/colorado2ndrental/3.jpg";
import img3 from "./images/colorado2ndrental/4.jpg";
import img4 from "./images/colorado2ndrental/5.jpg";
import img5 from "./images/colorado2ndrental/6.jpg";
import img6 from "./images/colorado2ndrental/7.jpg";
import img7 from "./images/colorado2ndrental/8.jpg";
import img8 from "./images/colorado2ndrental/9.jpg";
import img9 from "./images/colorado2ndrental/10.jpg";
import ColoCaro2 from './carousels/ColoCaro2';


const arr = [
    img0,  img1,
    img3,  img5, 
    img7, img2,
    img4, img6,
    img8, img9
    
];


export default () => {


    return (
        <>
        <div className="row row-cols-2 image-fade-in">
        
            <div className="col-12 col-md-6 col-lg-6 text-center">
                
                
                    <ColoCaro2 />
                <div className='faded'>
                <h3>
                    4 Bedrooms, 3 Baths 4000 sqft.
                </h3>
                <h4>
                    1328 E Dike Rd, Mohave Valley, AZ
                </h4>
                <BookingInfo />
                <hr />
                <h5>
                    COLORADO RIVER VACATION HOMES 
                </h5>
                <p className='p-2'>
                    <TextPagi text={desc.coloRiver2Desc} />
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