import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <h2 className="FooterTitle">PhysioNB</h2>
            <div className="Router">
                <span className="Routes">About</span>
                <span className="Routes">Contact</span>
                <Link to={`/mydetails`}> <span className="Routes">My Details</span></Link>
            </div>
        </div>
    );
};

export default Footer;
