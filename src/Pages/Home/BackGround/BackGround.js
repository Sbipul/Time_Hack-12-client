import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="cus-bg-2 w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'60vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-9 text-light cus-pos">
                                <h1>It’s time to get what you really want</h1>
                                <p>Our quotes are based on historical sales and real-time market data allowing us to give fair prices without all the hassle.</p>
                            </div>
                            <div className="col-12 col-md-3 cus-pos">
                                <Button variant="danger">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BackGround;