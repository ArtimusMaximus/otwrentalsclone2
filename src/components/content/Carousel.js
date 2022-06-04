
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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


export default () => {

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

    const styles = {
        height: '100%'
    }
    

// showThumbs needs the images to build the thumbs
    return (
        <>
        <div className='col-12 col-md-6 col-lg-6'>
            <Carousel autoFocus={true} dynamicHeight={true} emulateTouch={true} autoPlay={true} interval={2000} showThumbs={false} showIndicators={false}> 
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
        </div>
        </>
    )
}