import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carocont.css'
import { Carousel } from 'react-responsive-carousel';
import img0 from "../images/sunsetbeachimages/11.webp"
import img1 from "../images/sunsetbeachimages/2.webp"
import img2 from "../images/sunsetbeachimages/3.webp"
import img3 from "../images/sunsetbeachimages/4.webp"
import img4 from "../images/sunsetbeachimages/5.webp"
import img5 from "../images/sunsetbeachimages/6.webp"
import img6 from "../images/sunsetbeachimages/7.webp"
import img7 from "../images/sunsetbeachimages/8.webp"
import img8 from "../images/sunsetbeachimages/9.webp"
import img9 from "../images/sunsetbeachimages/10.webp"
import img10 from "../images/sunsetbeachimages/1.webp"
import img11 from "../images/sunsetbeachimages/12.webp"
import img12 from "../images/sunsetbeachimages/13.webp"
import img13 from "../images/sunsetbeachimages/14.webp"
import img14 from "../images/sunsetbeachimages/15.webp"
import img15 from "../images/sunsetbeachimages/16.webp"
import img16 from "../images/sunsetbeachimages/17.webp"
import img17 from "../images/sunsetbeachimages/18.webp"
import img18 from "../images/sunsetbeachimages/19.webp"
import img19 from "../images/sunsetbeachimages/20.webp"
import img20 from "../images/sunsetbeachimages/21.webp"
import img21 from "../images/sunsetbeachimages/22.webp"
import img22 from "../images/sunsetbeachimages/23.webp"
import img23 from "../images/sunsetbeachimages/24.webp"
import img24 from "../images/sunsetbeachimages/25.webp"
import img25 from "../images/sunsetbeachimages/26.webp"
import img26 from "../images/sunsetbeachimages/27.webp"

export default () => {
    const arr = [
        img0,  img1,  img2,  img3,  img4,
        img5,  img6,  img7,  img8,  img9,
        img10, img11, img12, img13, img14,
        img15, img16, img17, img18, img19,
        img20, img21, img22, img23, img24,
        img25, img26
    ];

    const styles = {
        maxHeight: '360px'
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
                                <div className='carocontainer'>
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