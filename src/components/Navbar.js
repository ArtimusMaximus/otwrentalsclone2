import React from 'react';
import './navbar.css'
import logo from './content/images/otwlogo.gif'

function Navbar() {
    return (
        <>
        <div className="row Navbar">
        <span className="logo"><img src={logo} style={{margin: '5px'}} /></span>
        
        {' '}
        
        </div>
        </>
    )
}

export default Navbar;