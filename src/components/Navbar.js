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
            <div className='d-flex align-items-center justify-content-center col-lg-12 col-md-6 col-6'>
                <span className="logo"><img src={logo} style={{margin: '3px'}} /></span>
                <div className='d-none d-lg-block d-xl-block d-xxl-block align-items-center justify-content-center'>
                
                    <Link className='around' to="/">Home</Link>
                    <Link className='around' to="/sunsetbeach">Sunset Beach</Link>
                    <Link className='around' to="/sealbeach">Seal Beach</Link>
                    <Link className='around' to="/lakearrowhead">Lake Arrowhead</Link>
                    <Link className='around' to="/coloradoriver">Colorado River</Link>
                    <Link className='around' to="/ranchomirage">Rancho Mirage</Link>
                    {/* <Link className='around' to="/3dtoursvids">Virtual Tours</Link> */}

                </div>
            
            </div>
            <div className='d-lg-none d-flex flex-row-reverse'>
                <div className="p-2">
                    <Dropdown className='ddm'>
                        <Dropdown.Toggle variant="link" bsPrefix="p-0">
                            <GoGrabber className='ddm' size={100} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/"><div className='wrap'>Home</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/sunsetbeach"><div className='wrap'>Sunset Beach</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/sealbeach"><div className='wrap'>Seal Beach</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/lakearrowhead"><div className='wrap'>Lake Arrowhead</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/coloradoriver"><div className='wrap'>Colorado River</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/ranchomirage"><div className='wrap'>Rancho Mirage</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/virtualtours"><div className='wrap'>Virtual Tours</div></Link></Dropdown.Item>
                            <Dropdown.Item as={'li'}><Link className='dd' to="/contactinfo"><div className='wrap container-fluid'>Contact Info</div></Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;