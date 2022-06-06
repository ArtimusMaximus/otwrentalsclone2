import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import logo from './content/images/otwlogo.gif';
import { GoGrabber } from 'react-icons/go';
import UnopDropdown from 'unop-react-dropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import { removeData } from 'jquery';


function Navbar() {
    const styles = {
       textDecoration: 'none',
       color: 'inherit'
    }



    return (
        <>
        
        <div className="row navbar">
            <div className='d-flex align-items-center justify-content-center'>
                <span className="logo"><img src={logo} style={{margin: '3px'}} /></span>
                <div className='d-none d-lg-block d-xl-block d-xxl-block mr-auto align-items-center justify-content-center'>
                
                    <Link className='around' to="/">Home</Link>
                    <Link className='around' to="/sunsetbeach">Sunset Beach</Link>
                    <Link className='around' to="/sealbeach">Seal Beach</Link>
                    <Link className='around' to="/lakearrowhead">Lake Arrowhead</Link>
                    <Link className='around' to="/coloradoriver">Colorado River</Link>
                    <Link className='around' to="/ranchomirage">Rancho Mirage</Link>
                    <Link className='around' to="/virtualtours">Virtual Tours</Link>
                </div>
            
        
            <div className='d-lg-none d-flex justify-content-center align-items-center'>
                
                <Dropdown className='ddm'>
                    <Dropdown.Toggle variant="link" bsPrefix="p-0">
                        <GoGrabber className='ddm' size={100} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link className='dd' to="/">Home</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/sunsetbeach">Sunset Beach</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/sealbeach">Seal Beach</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/lakearrowhead">Lake Arrowhead</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/coloradoriver">Colorado River</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/ranchomirage">Rancho Mirage</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/virtualtours">Virtual Tours</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='dd' to="/contactinfo">Contact Info</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;