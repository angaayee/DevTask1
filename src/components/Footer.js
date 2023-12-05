import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <div className="footer">
            <p>© 2023 All Rights Reserved By ShopEasy</p>
            <p>Privacy Policy</p>
            <ul>
            <li><FontAwesomeIcon icon={faInstagram} style={{ color: '#d71499' }} /></li>
            <li><FontAwesomeIcon icon={faFacebook} style={{ color:  '#1b63de'}} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} style={{ color: '#1d65c3' }} /></li>
                
            </ul>
        </div>
    )
}