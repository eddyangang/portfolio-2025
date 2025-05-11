import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
export default function AboutMe() {
    return (
        <Container className='my-2'>
            <Row>
                <Col>
                    <div className='wrapper'>
                        <img src='./img/me2.jpg' alt='me' />
                    </div>
                </Col>

                <Col>
                    <h1>About Me</h1>
                    <p>
                        I graduated from the UCB with a degree in Mechanical
                        Engineering and later found my interest in software. I
                        have a certificate in Full Stack Web Development. I am
                        currently looking for a position in software testing
                        (SDET) or Frontend Web Development. I've been working as
                        an SDET for over 3.5 years now, with skills in Cypress
                        and Selenium. Skills in Next.js, React, TS/JS.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
