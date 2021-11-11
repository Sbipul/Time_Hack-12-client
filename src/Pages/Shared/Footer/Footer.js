import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillTelephoneFill,BsEnvelopeFill,BsFacebook,BsTwitter,BsYoutube,BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-Dark p-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="p-3">
                        <h2>WATCH WORLD</h2>
                        <p style={{textAlign:'justify'}}>To get a behind-the-scenes look at HODINKEE's team of traveling editors and all the incredible watch photos you can handle.</p>
                        <span><BsFillTelephoneFill className="me-3"/>+8801954443121</span><br />
                        <span><BsEnvelopeFill className="me-3"/>kumarroy.kb.kb@gmail.com</span>
                        <div className="d-flex align-items-center justify-content-between w-50 pt-3">
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsYoutube/>
                            <BsLinkedin/>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="p-3">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Our COMPANY</li>
                                <li>MASTHEAD</li>
                                <li>PRIVACY</li>
                                <li>TERMS OF USE</li>
                                <li>CAREERS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="p-3">
                            <h2>Contact Us</h2>
                            <input style={{border:'.5px solid rgb(146, 91, 20)'}} className="w-100 p-2 bg-Dark" type="text" placeholder="Your Name"/>
                            <textarea style={{border:'.5px solid rgb(146, 91, 20)'}} placeholder="Your text" name="" id="" cols="30" rows="4" className="my-3 w-100 p-2 bg-Dark"></textarea>
                            <Button style={{background:'black',border:'1px solid tomato'}}>Send</Button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;