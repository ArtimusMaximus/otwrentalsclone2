import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carocont.css'
import { Carousel } from 'react-responsive-carousel';
import img0 from "../images/colorado2ndrental/1.jpg";
import img1 from "../images/colorado2ndrental/2.jpg";
import img2 from "../images/colorado2ndrental/3.jpg";
import img3 from "../images/colorado2ndrental/4.jpg";
import img4 from "../images/colorado2ndrental/5.jpg";
import img5 from "../images/colorado2ndrental/6.jpg";
import img6 from "../images/colorado2ndrental/7.jpg";
import img7 from "../images/colorado2ndrental/8.jpg";
import img8 from "../images/colorado2ndrental/9.jpg";
import img9 from "../images/colorado2ndrental/10.jpg";

export default () => {
    const arr = [
        img0,  img1,  img2,  img3,  img4,
        img5,  img6,  img7,  img8,  img9
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