import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div>
            <Container>
                <div style={{height:'50vh'}} className=" position-relative">
                    <img style={{objectFit:'cover'}} src="https://78.media.tumblr.com/049f4e669635bcd89a1e020b8278ab48/tumblr_p01hvm675O1ts9gtvo3_500.gif" className="w-100 h-100" alt="" />
                    <div className='d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100'>
                    <h1 style={{fontFamily: "'Oswald', 'sans-serif'",letterSpacing:'2px',wordSpacing:'2px'}} className="text-warning">Welcome to DASHBOARD</h1>
                </div>
                </div>
                
            </Container>
        </div>
    );
};

export default Welcome;