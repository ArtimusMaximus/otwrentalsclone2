import React from 'react';
import './footer.css';
import { AiFillFacebook, AiFillYoutube, AiFillTwitterCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'


function Footer() {
    return (
        <footer className="footer d-none d-md-block">
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='d-flex justify-content-center col-3 align-items-center text-center'>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Postal Address:</li>    
                            <li>1508 S. Mayflower</li>    
                            <li>Monrovia, CA 91016</li>    
                        </ul>                   
                    </div>
                    <div className='d-flex justify-content-center align-items-center text-center col-3'>
                        <ul style={{listStyleType: 'none'}}>
                            <li><AiOutlinePhone size={25} />626-305-7426</li>
                            <li>Fax: 626-305-7428</li>
                        </ul>    
                    </div>
                    <div className='d-flex justify-content-center col-3 align-items-center text-center'>
                    <AiFillFacebook size={50} />
                    {'  '}
                    <AiFillYoutube size={50} />
                    {'  '}
                    <AiFillTwitterCircle size={50} />
                    </div>
                    <div className='d-flex justify-content-center align-items-center col-3 text-center'>
                    <p><AiOutlineMail size={50} /><a href="mailto:johnny@onethewaterrentals.com">Johnny@onethewaterrentals.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;