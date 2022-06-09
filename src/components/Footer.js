import React from 'react';
import './footer.css';
import { AiFillFacebook, AiFillYoutube, AiFillTwitterCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsMailbox } from 'react-icons/bs'

function Footer() {
    return (
        <footer className="footer d-none d-md-block">
            <div className='container h-100'>
                <div className='row h-100'>
                <div className='d-flex justify-content-center align-items-center col-3 text-center'>
                        <p><a href="mailto:johnny@onthewaterrentals.com"><AiOutlineMail size={50} color={'black'} /></a><a href="mailto:johnny@onthewaterrentals.com"><b>Johnny@OnTheWaterRentals.com</b></a></p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center text-center col-3'>
                        <ul style={{listStyleType: 'none'}}>
                            <li><AiOutlinePhone size={25} /><b>626-305-7426</b></li>
                            <li><b>F: 626-305-7428</b></li>
                        </ul>    
                    </div>
                    
                    <div className='d-flex justify-content-center col-3 align-items-center text-center'>
                        <ul style={{listStyleType: 'none'}}>
                            <li className='d-flex align-items-center'><BsMailbox size={25} />{'  '}<b>Postal Address:</b></li>    
                            <li><b>1508 S. Mayflower</b></li>    
                            <li><b>Monrovia, CA 91016</b></li>    
                        </ul>                   
                    </div>
                    <div className='d-flex justify-content-center col-3 align-items-center text-center'>
                    <a href="https://www.facebook.com/OnTheWaterRentals/?ref=ts" target="_blank"><AiFillFacebook size={50} /></a>
                    {'  '}
                    <a href="https://www.youtube.com/user/onthewaterrentals" target="_blank"><AiFillYoutube size={50} color={'red'} /></a>
                    {'  '}
                    <a href="https://twitter.com/onwaterrentals" target="_blank"><AiFillTwitterCircle size={50}  /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;