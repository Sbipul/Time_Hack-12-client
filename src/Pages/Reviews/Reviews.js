import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('https://immense-falls-01294.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="bg-Dark py-5">
            <Container>
                <h1 className="my-5">Buyers Review...</h1>
            <Row xs={1} md={3} className="g-4">
                {
                reviews.map(review => <Col className="review  p-3">
                <div className="d-flex align-items-center">
                    <div style={{height:'50px',width:'50px',overflow:'hidden'}} className="rounded-circle border-1">
                        <img className="w-100 h-100" src={review?.img} alt="" />
                    </div>
                    <div className="mx-3">
                        <p className="text-warning p-0 m-0">{review?.name}</p>
                        <Rating name="half-rating-read" defaultValue={parseFloat(review?.count) || 5} precision={0.5} readOnly />
                    </div>
                </div>
                <div className="w-100">
                    <p>{review?.message}</p>
                </div>
            </Col>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;