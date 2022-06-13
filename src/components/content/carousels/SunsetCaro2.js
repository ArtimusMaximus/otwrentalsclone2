import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img0 from "../images/sunset2ndrental/10.webp"
import img1 from "../images/sunset2ndrental/2.webp"
import img2 from "../images/sunset2ndrental/3.webp"
import img3 from "../images/sunset2ndrental/4.webp"
import img4 from "../images/sunset2ndrental/5.webp"
import img5 from "../images/sunset2ndrental/6.webp"
import img6 from "../images/sunset2ndrental/7.webp"
import img7 from "../images/sunset2ndrental/8.webp"
import img8 from "../images/sunset2ndrental/9.webp"
import img9 from "../images/sunset2ndrental/1.webp"
import img10 from "../images/sunset2ndrental/11.webp"
import img11 from "../images/sunset2ndrental/12.webp"
import img12 from "../images/sunset2ndrental/13.webp"
import img13 from "../images/sunset2ndrental/14.webp"
import img14 from "../images/sunset2ndrental/15.webp"
import img15 from "../images/sunset2ndrental/16.webp"
import img16 from "../images/sunset2ndrental/17.webp"
import img17 from "../images/sunset2ndrental/18.webp"
import img18 from "../images/sunset2ndrental/19.webp"
import img19 from "../images/sunset2ndrental/20.webp"
import img20 from "../images/sunset2ndrental/21.webp"
import img21 from "../images/sunset2ndrental/22.webp"
import img22 from "../images/sunset2ndrental/23.webp"
import img23 from "../images/sunset2ndrental/24.webp"
import img24 from "../images/sunset2ndrental/25.webp"
import img25 from "../images/sunset2ndrental/26.webp"
import img26 from "../images/sunset2ndrental/27.webp"
import img27 from "../images/sunset2ndrental/28.webp"
import img28 from "../images/sunset2ndrental/29.webp"
import img29 from "../images/sunset2ndrental/30.webp"
import img30 from "../images/sunset2ndrental/31.webp"
import img31 from "../images/sunset2ndrental/32.webp"
import img32 from "../images/sunset2ndrental/33.webp"
import img33 from "../images/sunset2ndrental/34.webp"
import img34 from "../images/sunset2ndrental/35.webp"
import img35 from "../images/sunset2ndrental/36.webp"
import img36 from "../images/sunset2ndrental/37.webp"
import img37 from "../images/sunset2ndrental/38.webp"
import img38 from "../images/sunset2ndrental/39.webp"
import img39 from "../images/sunset2ndrental/40.webp"
import img40 from "../images/sunset2ndrental/41.webp"

export default () => {
    const arr = [
        img0,  img1,  img2,  img3,  img4,
        img5,  img6,  img7,  img8,  img9,
        img10, img11, img12, img13, img14,
        img15, img16, img17, img18, img19,
        img20, img21, img22, img23, img24,
        img25, img26, img27, img28, img29,
        img30, img31, img32, img33, img34,
        img35, img36, img37, img38, img39,
        img40
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