import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return (
        <footer className="footer">
            <FontAwesomeIcon icon="check-square" />
            <small>Copyright <FontAwesomeIcon icon={Icons.faCopyright} /> </small>
        </footer>
    )
}

export default Footer;