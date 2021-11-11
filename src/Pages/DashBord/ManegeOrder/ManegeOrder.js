import React, {useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ManegeOrder = () => {
    const [allOrders,setAllOrders] = useState([])

    useEffect(()=> {
        fetch('https://immense-falls-01294.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const deleteBtn = id => {
        const confirm = window.confirm('Wanna delete this order of users? Sure?')
        if (confirm) {
            fetch(`https://immense-falls-01294.herokuapp.com/order/${id}`,{
            method:'DELETE'
        }).then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newOrders = allOrders.filter(order => order._id !== id)
                setAllOrders(newOrders)
            }
        })
        }
    }


    const updateBtn = id => {
        fetch(`https://immense-falls-01294.herokuapp.com/order/${id}`,{
            method:'PUT'
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Approved')
                const arr = []
                for (const order of allOrders) {
                    if (order?._id === id) {
                        order.status = 'Approved'
                    }
                    arr.push(order)
                }
                setAllOrders(arr)
            }
        })
    }
    return (
        <Container>
            <small className="text-light">#manage_orders</small>
            <h3>Here is your all orders</h3>
            <Row xs={1} md={3} className="g-4">
            {
                allOrders.map(order => <Col className="p-2" key={order?._id}>
                    <div className="d-flex align-items-center bg-dark text-light">
                        <div style={{height:'87px',width:'90px',overflow:'hidden'}} className="ps-2 border-1">
                            <img className="w-100 h-100" src={order?.img} alt="" />
                        </div>
                        <div className="p-2">
                                <h5 className="m-0 p-0">{order?.productName.slice(0,10)}</h5>
                                <p className="m-0 p-0">{order?.name}</p>
                                <p className="m-0 p-0">{order?.email}</p>
                                <p className="m-0 p-0 text-warning">{order?.status}</p>
                                <button className="me-1" onClick={()=>updateBtn(order?._id)}>Confirm</button>
                                <button className="ms-1" onClick={()=>deleteBtn(order?._id)}>Delete</button><br/>
                        </div>
                    </div>
                </Col>)
            }
             </Row>
        </Container>
    );
};

export default ManegeOrder;