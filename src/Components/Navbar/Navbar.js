import React, { useState } from 'react';
import './Navbar.scss';
import {ReactComponent as Logo} from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [navToggle, setNavToggle] = useState (false)
    const [toggleIcon, setToggleIcon] = useState ();

    console.log(toggleIcon);

    const handleToggle = () => {
        setNavToggle(!navToggle)
    }

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <a href="#" className="logo" onClick={handleToggle}><Logo /></a>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-wrap" id={navToggle ? "hide" : ""}>
                    <div className="navbar-link-wrap">
                        <a href="#" onClick={handleToggle}><div className="navbar-link">About</div></a>
                        <a href="#" onClick={handleToggle}><div className="navbar-link">Careers</div></a>
                        <a href="#" onClick={handleToggle}><div className="navbar-link">Events</div></a>
                        <a href="#" onClick={handleToggle}><div className="navbar-link">Products</div></a>
                        <a href="#" onClick={handleToggle}><div className="navbar-link">Support</div></a>
                    </div>
                </div>
                <a id="hamburger" onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></a>
            </div>
        </div>
    )
}

export default Navbar
