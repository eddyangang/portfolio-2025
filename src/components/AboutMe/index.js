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
                        Graduate from the UCB with a degree in Mechanical
                        Engineering and a certificate in Full Stack Web
                        Development. Currently looking for a position in Full
                        stack web development or Software development. Skills in
                        developing Fullstack MERN (MongoDB or MySQL, Express,
                        React, Node) applications using MVC architecture. Also,
                        with proficiency in advanced electronics such as
                        programming microcontroller, sensors, and actuators. My
                        technical aptitude in cutting-edge web technologies,
                        combined with adept problem solving abilities and
                        determination, make me a strong addition to any
                        engineering team.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
