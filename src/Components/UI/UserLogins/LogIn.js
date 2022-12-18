import React from "react";
import Helmet from "react-helmet";
import "./LogIn.css";
import logInImg from "../images/login.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Alter Learning Educational Platform - Sign In</title>
        <meta
          name="description"
          content="Alter Learning Educational Platform - Sign In"
        />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <div className="main_signin_container">
        <div className="main_inner_signin_container">
          <Container className="login_cont">
            <Row>
              <Col sm={6} className="left_side">
                <img className="login_img" src={logInImg} />
              </Col>
              <Col sm={6} className="right_side">
                <Form>
                  <h1 id="login_txt">Login</h1>{" "}
                  <h5>
                    New to Alter Learning? <a href="/registration">Register</a>
                  </h5>
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
                  <Button
                    className="login_button"
                    variant="primary"
                    type="submit"
                  >
                    Log In
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <a id="forgot">Forgot Password?</a>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LogIn;
