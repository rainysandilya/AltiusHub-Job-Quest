import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './navv.css'
function NavbarDemo() {
  return (
    <div className='n'>
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
         
                    <p>Job Quest</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}  to='/'  >Home</Nav.Link>
            <Nav.Link as={Link} to='/jobs'>Jobs</Nav.Link>
            <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarDemo;