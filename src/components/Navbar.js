import React from 'react';
import './navbar.css';
import logo from './content/images/otwlogo.gif';
import { GoGrabber } from 'react-icons/go';
import UnopDropdown from 'unop-react-dropdown';


function Navbar() {
    return (
        <>
        <div className="row navbar">
        <span className="logo"><img src={logo} style={{margin: '5px'}} /></span>
        
        

        <div className='flex float-right d-md-none'>
            <UnopDropdown 
                trigger={<GoGrabber size={100} />}
                align="LEFT"
            >
                <div className='bg' style={{background: 'white'}}>
                <ul className='ulist'>
                    
                    <li><h5>Home</h5></li>
                    <li><h5>Sunset Beach</h5></li>
                    <li><h5>Seal Beach</h5></li>
                    <li><h5>Lake Arrowhead</h5></li>
                    <li><h5>Colorado River</h5></li>
                    <li><h5>Rancho Mirage</h5></li>
                </ul>
                </div>
            </UnopDropdown>
            
        </div>
        </div>
        </>
    )
}

export default Navbar;