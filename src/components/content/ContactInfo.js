import React from 'react';
import { AiFillFacebook, AiFillYoutube, AiFillTwitterCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsMailbox } from 'react-icons/bs';


export default () => {

    const styles = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <>
        <div className="row">
            <div className='col-12 col-md-6 col-lg-6'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0 text-center mt-5'>
                        
                        <figure className='figure1 m-1' style={styles}>
                            <AiOutlinePhone size={100} />
                            <h2><figcaption className='figcap'>626-305-7426</figcaption></h2>
                        </figure>
                        
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0 text-center mt-5'>
                        
                        <figure className='figure1 m-1' style={styles}>
                            <AiOutlineMail size={100} />
                           <h6><figcaption><a href={'mailto:Johnny@OnTheWaterRentals.com'}>Johnny@OnTheWaterRentals.com</a></figcaption></h6>
                        </figure>
                        
                    </div>
                </div>
                
            </div>

            <div className="col-12 col-md-6 col-lg-6">    
            <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0 text-center mt-5'>
                        
                        <figure className='figure1 m-1' style={styles}>
                        <a href="https://www.facebook.com/OnTheWaterRentals/?ref=ts" target="_blank"><AiFillFacebook size={50} /></a>
                        <a href="https://www.youtube.com/user/onthewaterrentals" target="_blank"><AiFillYoutube size={50} color={'red'} /></a>
                        <a href="https://twitter.com/onwaterrentals" target="_blank"><AiFillTwitterCircle size={50} /></a>
                           <h2><figcaption>Social Media</figcaption></h2>
                        </figure>
                        
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center p-0 text-center mt-5'>
                        
                        <figure className='figure1 m-1' style={styles}>
                            <BsMailbox size={100} />
                           <h2><figcaption>
                           
                                <h6>Mailing Address:</h6>    
                                <h6>1508 S. Mayflower</h6>    
                                <h6>Monrovia, CA 91016</h6>    
                             
                            </figcaption></h2>
                        </figure>
                        
                    </div>
                </div>



            </div>
            
        </div>
        </>
    )
}