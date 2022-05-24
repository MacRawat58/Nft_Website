import React from "react";
import facebook from "../images/FacebookIcon.png";
import insta from "../images/InstagramIcon.png";
import linkdin from "../images/LinkedinIcon.png";
import twitter from "../images/TwitterIcon.png";
import git from "../images/GitHubIcon.png";

const Footer = () =>{
    return (
        <div className="Foot">
            <img className="icon" alt="icon" src={facebook}/>
            <img className="icon" alt="icon" src={insta}/>
            <img className="icon" alt="icon" src={linkdin}/>
            <img className="icon" alt="icon" src={twitter}/>
            <img className="icon" alt="icon" src={git}/>
        </div>
    )
}

export default Footer;