
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
        const date = new Date()

        const {user,logOut} = useAuth()
    return (
            <>
                <div className="border-bottom" style={{background:'black'}}>
                <Container className="text-center py-2 d-flex align-items-center justify-content-between" >
                <Navbar.Brand  className="m-0 text-light dN" >{date.toLocaleDateString()}</Navbar.Brand>
                    <Navbar.Brand style={{fontFamily:"'Lobster', 'cursive'",fontSize:'2rem'}} className="m-0"  as={Link} to="/home">Time_Hack</Navbar.Brand>
                    <Navbar.Brand  className="m-0 text-light" >{user?.displayName}</Navbar.Brand>
                </Container>
                </div>
            <Navbar className="bg-Dark" variant="dark">
                    <Container>
                    <Nav className="mx-auto text-center">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                    {
                        user?.email && <Nav.Link as={Link} to="/dash">DashBoard</Nav.Link>
                    }
                    {
                            user?.email ? <Nav.Link onClick={logOut}>Log out</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    
                    
                    </Nav>
                    </Container>
                    
            </Navbar>
            </>
    );
};

export default NavBar;