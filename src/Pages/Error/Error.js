import React from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
const Error = () => {
    return (
        <div>
                <div style={{height:'100vh'}} className="w-100">
                    <img src="https://assets.website-files.com/5c6dab076fc786143a664e6f/5cc88fef71a23e8053658ff7_campfire-01.gif" alt="" className="w-100 h-100" />
                    <div className="position-absolute h-100 w-100 top-0 start-0 d-flex align-items-center justify-content-center">
                        <div>
                            <h1 className="text-center text-warning" style={{fontSize:'4rem'}}>404</h1>
                            <Link className="text-center w-50 mx-auto" to="/home"><Button>Back to Home</Button></Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Error;
