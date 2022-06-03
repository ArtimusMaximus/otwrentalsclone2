import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/sunsetbeach">Sunset Beach</Link>
                </li>
                <li>
                    <Link to="/sealbeach">Seal Beach</Link>
                </li>
                <li>
                    <Link to="/coloradoriver">Colorado River</Link>
                </li>
                <li>
                    <Link to="/ranchomirage">Rancho Mirage</Link>
                </li>
                <li>
                    <Link to="/lakearrowhead">Lake Arrowhead</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;