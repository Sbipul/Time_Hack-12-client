
import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
        const {user,logOut} = useAuth()
    return (
            <>
            <Navbar className="bg-Dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                    {
                        user?.email && <Nav.Link as={Link} to="/dash">DashBoard</Nav.Link>
                    }
                    {
                            user?.email ? <Button onClick={logOut}>Log out</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    
                    
                    </Nav>
                    </Container>
                    
            </Navbar>
            </>
    );
};

export default NavBar;