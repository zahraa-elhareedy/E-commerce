import React, { Component } from "react";

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
                                                    <a href="/home"><img src="./assets/logo.png" alt="" id="logo" /></a>
                                                </div>
                                                <div className="footer-tittle">
                                                    <div className="footer-pera">
                                                        <p>Books for Everyone.</p>
                                                    </div>
                                                </div>

                                                <div className="footer-social">
                                                    <a href="/"><i className="fa-brands fa-square-facebook"></i></a>
                                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Book Category</h4>
                                                <ul>
                                                    <li><a href="/">Fiction</a></li>
                                                    <li><a href="/">Thriller</a></li>
                                                    <li><a href="/">Romance</a></li>
                                                    <li><a href="/">Science Fiction</a></li>
                                                    <li><a href="/">Biography</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>&nbsp;</h4>
                                                <ul>
                                                    <li><a href="/">Business</a></li>
                                                    <li><a href="/">Astrology</a></li>
                                                    <li><a href="/">Digital Marketing</a></li>
                                                    <li><a href="/">Software Development</a></li>
                                                    <li><a href="/">Ecommerce</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Site Map</h4>
                                                <ul className="mb-20">
                                                    <li><a href="/home">Home</a></li>
                                                    <li><a href="/about">About Us</a></li>
                                                    <li><a href="/contact">Contact</a></li>
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
