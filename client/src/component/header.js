import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/header.css'; 
function Header() {
    const activeStyle = {
        color: 'lightgray'
    };

    return (
        <div className='header'>
            <Navbar expand='lg' fixed='top' className="bg-dark"> 
                <Container>
                    <Navbar.Brand className='text-white'>
                        Yeabsira Aychiluhim
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav className='ml-auto'>
                            <NavLink to='/' className='nav-link' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Home
                            </NavLink>
                            <NavLink to='/about' className='nav-link' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                About
                            </NavLink>
                            <NavLink to='/service' className='nav-link' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Service
                            </NavLink>
                            <NavLink to='/project' className='nav-link' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Project
                            </NavLink>
                            <NavLink to='/contact' className='nav-link' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
