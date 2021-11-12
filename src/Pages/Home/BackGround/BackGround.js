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
                                <h1 className="text-warning">It’s time to get what you really want</h1>
                                <p className="text-warning">A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain</p>
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