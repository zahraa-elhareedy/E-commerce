import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {};
    render() {
        return (
            
                <footer>
                    <div className="footer-wrappper section-bg bg-light">
                        <div className="footer-area footer-padding">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="single-footer-caption mb-30">

                                                <div className="footer-logo mb-25">
                                                    <Link to="/home"><img src="/assets/logo.png" alt="" id="logo" /></Link>
                                                </div>
                                                <div className="footer-tittle">
                                                    <div className="footer-pera">
                                                        <p>Books for Everyone.</p>
                                                    </div>
                                                </div>

                                                <div className="footer-social">
                                                    <Link to="/facebook"><i className="fa-brands fa-square-facebook"></i></Link>
                                                    <Link to="/instagram"><i className="fa-brands fa-instagram"></i></Link>
                                                    <Link to="/twitter"><i className="fa-brands fa-twitter"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Book Category</h4>
                                                <ul>
                                                    <li><Link to="/category/Fiction">Fiction</Link></li>
                                                    <li><Link to="/category/Thriller">Thriller</Link></li>
                                                    <li><Link to="/category/Romance">Romance</Link></li>
                                                    <li><Link to="/category/Science Fiction">Science Fiction</Link></li>
                                                    <li><Link to="/category/Biography">Biography</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>&nbsp;</h4>
                                                <ul>
                                                    <li><Link to="/category/Business">Business</Link></li>
                                                    <li><Link to="/category/Astrology">Astrology</Link></li>
                                                    <li><Link to="/category/Digital Marketing">Digital Marketing</Link></li>
                                                    <li><Link to="/category/Software Development">Software Development</Link></li>
                                                    <li><Link to="/category/Ecommerce">Ecommerce</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Site Map</h4>
                                                <ul className="mb-20">
                                                    <li><Link to="/home">Home</Link></li>
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom-area">
                            <div className="container">
                                <div className="footer-border">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-xl-12 ">
                                            <div className="footer-copy-right text-center">
                                                <p>Copyright &copy; {new Date().getFullYear()} - All Rights Reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            
        );
    }
}

export default Footer;
