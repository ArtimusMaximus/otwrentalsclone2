import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import logo from './content/images/otwlogo.gif';
import { GoGrabber } from 'react-icons/go';
import UnopDropdown from 'unop-react-dropdown';
import Dropdown from 'react-bootstrap/Dropdown'


function Navbar() {
    return (
        <>
        <div className="row navbar">
        <span className="logo"><img src={logo} style={{margin: '5px'}} /></span>
        <Link to="/">Home</Link>
        <Link to="/sunsetbeach">Sunset Beach</Link>
        <Link to="/sealbeach">Seal Beach</Link>
        <Link to="/lakearrowhead">Lake Arrowhead</Link>
        <Link to="/coloradoriver">Colorado River</Link>
        <Link to="/ranchomirage">Rancho Mirage</Link>
        <Link to="/virtualtours">Virtual Tours</Link>
        

        <div className='d-md-none'>
            
            <Dropdown>
                <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    <GoGrabber size={100} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/sunsetbeach">Sunset Beach</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/sealbeach">Seal Beach</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/lakearrowhead">Lake Arrowhead</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/coloradoriver">Colorado River</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/ranchomirage">Rancho Mirage</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/virtualtours">Virtual Tours</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </div>
        </div>
        </>
    )
}

export default Navbar;