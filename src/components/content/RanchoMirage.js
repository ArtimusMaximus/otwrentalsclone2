import React from 'react';
import Sidebar from '../Sidebar';
import LakeArrowCarousel from './carousels/LakeArrowCarousel';


function RanchoMirage() {
    return (
        <>
        <div className="row row-cols-2">
            
        <div className="col-12 col-md-6 col-lg-6">
            <h1>
                RANCHO MIRAGE HILLTOP MASTERPIECE 
            </h1>
            <h3>
                4 bedroom 4 bathroom 3800 sqft
            </h3>
            <h4>
                35 Santa Rosa Mountain Lane., Rancho Mirage, California
            </h4>
            <LakeArrowCarousel />
            <p>
                Villas of Mirada is just walking minutes away from Ritz Carlton Hotel. This Tuscan styled San Gorgonio model the largest, with attached casita is at the end of a cul-de-sec, at the highest location, affording the utmost privacy with unmatched views. It is loaded with top-of-the line finishes and upgrades throughout, including a gourmet kitchen worthy of a professional chef! Two stone fireplaces, including one in the covered, outdoor loggia, off of the great room and master. Custom infinity pool and spa look out to gorgeous mountain views and city lights. This is a private, intimate neighborhood located only minutes from Restaurant Row, theatres and shopping. A homeowners dream!
            </p>
            <hr />
        </div>
            <div className='col-12 col-md-6 col-lg-6'>
            <h1>Virtual tour</h1>
            <div>tours</div>
            </div>
            <hr />
            
            <h1>Photo Gallery</h1>
            <div>photos</div>
            <div>photos</div>
            <div>photos</div>
            <div>photos</div>
            <div>photos</div>
            
        </div>
        
        </>
    )
}

export default RanchoMirage;