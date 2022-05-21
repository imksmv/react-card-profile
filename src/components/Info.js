import React from "react";
import Photo from "../images/photo.png";
import Email from "../images/email.svg";
import LinkedIn from "../images/linkedin.svg";

const Info = () => {
    return (
        <div className="contact">
            <img className="photo" src={Photo} alt="Developer" />
            <div className="initials __CONTAINER">
                <h1 className="initials__title">Illia Maksymov</h1>
                <h3 className="initials__subtitle">Full Stack Developer</h3>
                <h2 className="initials__website">illia-maksymov.com</h2>
            </div>
            <div className="contact__buttons">
                <button className="button __CONTAINER">
                    <div className="button__inner">
                        <img
                            className="button__icon"
                            src={Email}
                            alt="Email icon"
                        />
                        <span className="button__span">Email</span>
                    </div>
                </button>
                <button className="button button--blue __CONTAINER">
                    <div className="button__inner">
                        <img
                            className="button__icon"
                            src={LinkedIn}
                            alt="LinkedIn icon"
                        />
                        <span className="button__span button--blue">
                            LinkedIn
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Info;
