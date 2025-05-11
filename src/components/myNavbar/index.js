import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import Contact from '../ContactModal';

export default function myNavbar() {
    return (
        <Navbar className='justify-between'>
            <Navbar.Brand href='/'>Eddy Yang</Navbar.Brand>
            <Nav className='row-md justify-between'>
                <Contact />
                <Nav.Link
                    href='https://github.com/eddyangang?tab=repositories'
                    target='_blank'
                >
                    <i className='fa fa-github-square '></i>
                </Nav.Link>
                <Nav.Link
                    href='https://www.linkedin.com/in/eddy-yang-213b43189/'
                    target='_blank'
                >
                    <i className='fa fa-linkedin-square'></i>
                </Nav.Link>
                <Nav.Link
                    href='https://www.facebook.com/eddyangang'
                    target='_blank'
                >
                    <i className='fa fa-facebook-square'></i>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}
