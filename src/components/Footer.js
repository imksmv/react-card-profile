import React from "react";
import GitHub from "../images/github.svg";

const Footer = () => {
    return (
        <div className="footer __CONTAINER">
            <a
                href="https://github.com/imksmv"
                target="_blank"
                rel="noreferrer"
            >
                <img src={GitHub} alt="Github"></img>
            </a>
        </div>
    );
};

export default Footer;
