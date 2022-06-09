import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img0 from "../images/coloradoriverimages/7.webp";
import img1 from "../images/coloradoriverimages/2.webp";
import img2 from "../images/coloradoriverimages/3.webp";
import img3 from "../images/coloradoriverimages/4.webp";
import img4 from "../images/coloradoriverimages/5.webp";
import img5 from "../images/coloradoriverimages/6.webp";
import img6 from "../images/coloradoriverimages/1.webp";
import img7 from "../images/coloradoriverimages/8.webp";
import img8 from "../images/coloradoriverimages/9.webp";
import img9 from "../images/coloradoriverimages/10.webp";
import img10 from "../images/coloradoriverimages/11.webp";
import img11 from "../images/coloradoriverimages/12.webp";
import img12 from "../images/coloradoriverimages/13.webp";
import img13 from "../images/coloradoriverimages/14.webp";
import img14 from "../images/coloradoriverimages/15.webp";
import img15 from "../images/coloradoriverimages/16.webp";

export default () => {
    const arr = [
        img0,  img1,  img2,  img3,  img4,
        img5,  img6,  img7,  img8,  img9,
        img10, img11, img12, img13, img14,
        img15
    ];

    const styles = {
        height: '100%'
    };

    //<div className='col-12 col-md-6 col-lg-6'> removed

    return (
        <>
        
        
            <Carousel 
                autoFocus={true} 
                dynamicHeight={true} 
                emulateTouch={true} 
                autoPlay={true} 
                interval={2000} 
                showThumbs={false} 
                showIndicators={false}
                width={'100%'}
            > 
                {
                    arr.map((img, i) => {
                        return (
                            <div key={i}>
                                <div>
                                    <img src={img} style={styles} />
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        
        

        </>
    )
}