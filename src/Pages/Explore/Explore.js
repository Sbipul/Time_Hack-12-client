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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id labore dolorum nam officia adipisci sapiente beatae at, nobis temporibus, vero veritatis inventore? Hic aperiam, doloremque, quae earum quis illum deserunt esse sit maxime quaerat voluptatibus distinctio animi unde voluptas delectus. Incidunt quam nam nostrum accusamus ab quae repellat dolor impedit?</p>
                <Row xs={1} md={4} className="g-4">
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
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default Explore;