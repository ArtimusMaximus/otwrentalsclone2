import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img0 from "../images/ranchomirageimages/1.jpg"
import img1 from "../images/ranchomirageimages/10.jpg"
import img2 from "../images/ranchomirageimages/11.jpg"
import img3 from "../images/ranchomirageimages/12.jpg"
import img4 from "../images/ranchomirageimages/13.jpg"
import img5 from "../images/ranchomirageimages/14.jpg"
import img6 from "../images/ranchomirageimages/15.jpg"
import img7 from "../images/ranchomirageimages/16.jpg"
import img8 from "../images/ranchomirageimages/17.jpg"
import img9 from "../images/ranchomirageimages/18.jpg"
import img10 from "../images/ranchomirageimages/19.jpg"
import img11 from "../images/ranchomirageimages/2.jpg"
import img12 from "../images/ranchomirageimages/20.jpg"
import img13 from "../images/ranchomirageimages/21.jpg"
import img14 from "../images/ranchomirageimages/22.jpg"
import img15 from "../images/ranchomirageimages/23.jpg"
import img16 from "../images/ranchomirageimages/24.jpg"
import img17 from "../images/ranchomirageimages/25.jpg"
import img18 from "../images/ranchomirageimages/26.jpg"
import img19 from "../images/ranchomirageimages/27.jpg"
import img20 from "../images/ranchomirageimages/28.jpg"
import img21 from "../images/ranchomirageimages/29.jpg"
import img22 from "../images/ranchomirageimages/3.jpg"
import img23 from "../images/ranchomirageimages/30.jpg"
import img24 from "../images/ranchomirageimages/31.jpg"
import img25 from "../images/ranchomirageimages/32.jpg"
import img26 from "../images/ranchomirageimages/33.jpg"
import img27 from "../images/ranchomirageimages/34.jpg"
import img28 from "../images/ranchomirageimages/35.jpg"
import img29 from "../images/ranchomirageimages/36.jpg"
import img30 from "../images/ranchomirageimages/37.jpg"
import img31 from "../images/ranchomirageimages/38.jpg"
import img32 from "../images/ranchomirageimages/39.jpg"
import img33 from "../images/ranchomirageimages/4.jpg"
import img34 from "../images/ranchomirageimages/40.jpg"
import img35 from "../images/ranchomirageimages/41.jpg"
import img36 from "../images/ranchomirageimages/42.jpg"
import img37 from "../images/ranchomirageimages/43.jpg"
import img38 from "../images/ranchomirageimages/44.jpg"
import img39 from "../images/ranchomirageimages/45.jpg"
import img40 from "../images/ranchomirageimages/46.jpg"
import img41 from "../images/ranchomirageimages/47.jpg"
import img42 from "../images/ranchomirageimages/48.jpg"
import img43 from "../images/ranchomirageimages/49.jpg"
import img44 from "../images/ranchomirageimages/5.jpg"
import img45 from "../images/ranchomirageimages/50.jpg"
import img46 from "../images/ranchomirageimages/51.jpg"
import img47 from "../images/ranchomirageimages/52.jpg"
import img48 from "../images/ranchomirageimages/53.jpg"
import img49 from "../images/ranchomirageimages/54.jpg"
import img50 from "../images/ranchomirageimages/55.jpg"
import img51 from "../images/ranchomirageimages/56.jpg"
import img52 from "../images/ranchomirageimages/57.jpg"
import img53 from "../images/ranchomirageimages/58.jpg"
import img54 from "../images/ranchomirageimages/59.jpg"
import img55 from "../images/ranchomirageimages/6.jpg"
import img56 from "../images/ranchomirageimages/7.jpg"
import img57 from "../images/ranchomirageimages/8.jpg"
import img58 from "../images/ranchomirageimages/9.jpg"




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
        img40, img41, img42, img43, img44,
        img45, img46, img47, img48, img49,
        img50, img51, img52, img53, img54,
        img55, img56, img57, img58
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