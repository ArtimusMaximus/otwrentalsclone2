import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img0 from "../images/sealbeachimages/1.jpg"
import img1 from "../images/sealbeachimages/10.jpg"
import img2 from "../images/sealbeachimages/11.jpg"
import img3 from "../images/sealbeachimages/12.jpg"
import img4 from "../images/sealbeachimages/13.jpg"
import img5 from "../images/sealbeachimages/14.jpg"
import img6 from "../images/sealbeachimages/2.jpg"
import img7 from "../images/sealbeachimages/3.jpg"
import img8 from "../images/sealbeachimages/4.jpg"
import img9 from "../images/sealbeachimages/5.jpg"
import img10 from "../images/sealbeachimages/6.jpg"
import img11 from "../images/sealbeachimages/7.jpg"
import img12 from "../images/sealbeachimages/8.jpg"
import img13 from "../images/sealbeachimages/9.jpg"

export default () => {

    const arr = [
        img0,  img1,  img2,
        img3,  img4,  img5,
        img6,  img7,  img8,
        img9,  img10, img11,
        img12, img13
    ];

    const styles = {
        height: '100%'
    }

    return (
        <>
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
        </>
    )
}