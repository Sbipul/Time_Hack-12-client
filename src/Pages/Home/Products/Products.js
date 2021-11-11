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
        <div className="bg-Dark text-light py-5">
            <Container>
                <div className="w-100 mx-auto">
                <h3 className="text-center">WE ARE NOT THE BEST BUT ACCEPTIONAL</h3>
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nobis placeat adipisci quasi libero pariatur eum iste ab soluta doloremque alias molestias, repellat sunt recusandae eveniet impedit, delectus officiis veritatis?</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Col key={product?._id}>
                            <Card style={{border:'1px solid tomato'}}>
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img} />
                                <div className="p-3 bg-Dark">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Card.Title>{product?.productName}</Card.Title>
                                    <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.5} readOnly />
                                </div>
                                <p className="p-0 m-0">{product?.des}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h2>$ 50</h2>
                                    <Link to={`/purchase/${product._id}`}><Button style={{background:'black',border:'1px solid tomato'}}>Purchase</Button></Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row>
                <h3>More...</h3>
            </Container>
        </div>
    );
};

export default Products;