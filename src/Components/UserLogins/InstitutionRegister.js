import React from "react";
import Helmet from "react-helmet";
import "./teacherRegister.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import institutionImg from "./images/institutionImg.png"


const InstitutionRegister = () => {

    return (
        <div>
            <Helmet>
                <title>Alter Learning Educational Platform - Teacher Registration</title>
                <meta name="description" content="Alter Learning Educational Platform - Teacher Registration" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>


            <div className="main_signin_container">
                <div className="main_inner_signin_container">
                    <Container className="login_cont">
                        <Row>
                            <Col sm={8} className="left_side">
                                <img className="login_img" src={institutionImg} />
                            </Col>
                            <Col sm={4} className="right_side">
                                <Form>
                                    <h1 className="teacher_register_txt">Register Institution Account</h1>
                                    <h5 className="details_text">Please enter your details below.</h5>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" />

                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Last name" />

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Check className="agree_checkbox" type="checkbox" label="I agree to terms & conditions" />
                                    <Button className="login_button" variant="primary" type="submit">Save & Continue</Button>

                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    )
}

export default InstitutionRegister;