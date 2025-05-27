import React, { useEffect } from 'react';
import Image from "../images/logopoolservice.png";
import  EclipsePoolLogo  from "./../images/TreeCo2.png";
import TreeLogo from "../images/TreeCo2.png";
import {Nav} from "react-bootstrap";

const Footer = () => {
    useEffect(() => {
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-12">
                        <div className="footer-thumb footer-info" style={{ textAlign: 'center' }}>
                            <img
                                src={TreeLogo}
                                alt="Tree Company Logo"
                                style={{ height: '200px', width: 'auto' }}
                            />

                        </div>
                        <div className="phone-contact" style={{ textAlign: 'center', marginTop: '0px' }}>
                            <a href="tel:+19729799004" style={{ textDecoration: 'none', color: 'white' }}>
                                CALL US (972) 979-9004
                            </a>
                        </div>
                    </div>



                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Services</h2>
                            <ul className="footer-link">
                                <li style={{cursor:"pointer"}} onClick={() => scrollToSection('services')}>Tree Removal</li>
                                <li style={{cursor:"pointer"}} onClick={() => scrollToSection('services')}>Tree Pruning and Trimming</li>
                            <li style={{cursor:"pointer"}} onClick={() => scrollToSection('services')}>Stump Grinding</li>
                            <li style={{cursor:"pointer"}} onClick={() => scrollToSection('services')}>Emergency Storm Response</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <ul className="footer-link">
                                <h2>Company</h2>
                                <li><a href="#contact">Join our team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Find us</h2>
                            <ul
                                href="https://www.facebook.com/profile.php?id=100066643969434/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-facebook-square" style={{ fontSize: 24 }} />
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="footer-bottom">
                            <div className="col-md-6 col-sm-5">
                                <div className="copyright-text" style={{ textAlign: 'center' }}>
                                    <p>Copyright &copy; <span id="currentYear"></span> Clubhouse Links</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
