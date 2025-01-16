import React from 'react';
import './Footer.css';  
const Footer = () => {
    return (
        <div>
        <footer className="footer text-white w-100  justify-content-between pt-5 pb-5">
            <div className="footer-content d-flex container pb-5 pt-5">
                <div className="footer-section text-center ">
                    <h3>LOCATION</h3>
                    <p className='pb-3'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65483</p>
                </div>
                <div className="footer-section text-center">
                    <h3>AROUND THE WEB</h3>
                    <div className='d-flex justify-content-center '>
                        <ul className='d-flex text-center justify-content-between w-50' >
                            <div className='icon-social rounded-circle align-content-center'>
                                <i class="fa-brands fa-facebook "></i>
                            </div>
                            <div className='icon-social  rounded-circle align-content-center'>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className='icon-social  rounded-circle align-content-center'>
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className='icon-social  rounded-circle align-content-center'>
                                <i class="fa-brands fa-chrome"></i>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="footer-section text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p>
                        Freelancer is a free to use, licensed Bootstrap theme created by Route.
                    </p>
                </div>

                
            </div>
          
        </footer>

        <div className="Copy-right w-100 d-flex pt-4 pb-4  justify-content-center align-items-center text-white">
                <div className=" d-flex ">
                    <h4  >Copyright © Your Website 2021

                    </h4>
                </div>
            </div>

        </div>
    );
};  

export default Footer;