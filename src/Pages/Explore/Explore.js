import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer'
const Explore = () => {
    const [allItems,setAllItems] = useState([])

    useEffect(()=>{
        fetch('https://immense-falls-01294.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllItems(data))
    },[])
    return (
        <div>
            <NavBar/>
            <Container className="py-5">
                <h1>Explore Big</h1>
                <p className="w-75">A watch is a portable timepiece intended to be carried or worn by a person. ... During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.</p>
                {
                    allItems.length ? <Row xs={1} md={4} className="g-4">
                    {
                        allItems.map(item => <Col key={item._id}>
                            <Card>
                              <Card.Img style={{height:'150px'}} variant="top" src={item?.img} />
                              <Card.Body>
                                <Card.Title>{item?.productName}</Card.Title>
                                <Card.Title>${item?.price}</Card.Title>
                                <Card.Text>{item?.des.slice(0,50)}</Card.Text>
                                <Link to={`/purchase/${item._id}`}><Button style={{background:'black',border:'1px solid tomato'}}>Purchase</Button></Link>
                              </Card.Body>
                            </Card>
                          </Col>)
                    }
                    </Row> : <div style={{height:'60vh'}} className="d-flex align-items-center justify-content-between">
                            <div className="w-50 mx-auto">
                                <img className="w-100" src="https://s3.amazonaws.com/msc-media-linux-production/5e0ea029945d6.gif" alt="" />
                            </div>
                    </div>
                }
            </Container>
            <Footer/>
        </div>
    );
};

export default Explore;