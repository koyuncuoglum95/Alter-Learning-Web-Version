import React from "react";
import Helmet from "react-helmet";
import "./login.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import loginImg from "./images/loginImg.png"


const StudnetRegister = () => {

    return (
        <div>
            <Helmet>
                <title>Alter Learning Educational Platform - login</title>
                <meta name="description" content="Alter Learning Educational Platform - Teacher Registration" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>


            <div className="main_signin_container">
                <Container>
                    <Row>
                        <Col sm={8}className="left_side">
                            <img id="login_Img" src={loginImg} />
                        </Col>
                        <Col sm={4} className="right_side">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <button variant="primary" className="loginBtn" type="submit">Log In</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default StudnetRegister;