import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://immense-falls-01294.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className=" py-5">
            <Container>
                <div className="w-100 mx-auto">
                <h3 className="text-center">WE ARE NOT THE BEST BUT ACCEPTIONAL</h3>
                <p className="text-center">We make the process as easy as possible for our sellers. But first thing you’ll need to do is fill out our quote form above to get the ball rolling. From there, you will receive an email that will give you next steps.</p>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Col key={product?._id}>
                            <Card className="shadow-lg">
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img} />
                                <div className="p-3 bg-light">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Card.Title>{product?.productName}</Card.Title>
                                    <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.5} readOnly />
                                </div>
                                <p className="p-0 m-0">{product?.des}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h2>$ 50</h2>
                                    <Link to={`/purchase/${product._id}`}><Button className="bg-danger border-0">Order Now</Button></Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row> : <div style={{height:'60vh'}} className="d-flex align-items-center justify-content-between">
                        <div className="w-50 mx-auto">
                            <img className="w-100" src="https://miro.medium.com/max/1838/1*e_Loq49BI4WmN7o9ItTADg.gif" alt="" />
                        </div>
                </div>
                }
                <Link to="/explore"><h3 className="mt-3">More...</h3></Link>
            </Container>
        </div>
    );
};

export default Products;