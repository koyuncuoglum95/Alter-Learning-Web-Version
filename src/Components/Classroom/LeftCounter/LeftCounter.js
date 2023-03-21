import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, Container, CardImg, CardFooter, ListGroup,ListGroupItem } from 'reactstrap';
import './LeftCounter.css';



class LeftCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* 1 */}
                <div>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">ALTER LEARNING CONNECT </CardHeader>
                        <CardImg width="100%" height="92%"src="images/v443_23035.png" alt="Card image cap" />
                    </Card>
                </div>

                {/* 2 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY SCHOOL  <i class="fas fa-cog"></i></CardHeader>
                            <Row>
                                <Col>
                                    <CardImg
                                        width="100%"
                                        height="153%"
                                        src="images/widget2.jpeg" />
                                </Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                    </Card>
                </div>

                {/* 3 */}
                <div style={{ marginTop: "200px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">CLASSROOMS <i class="fas fa-search"></i><i align="right" class="fas fa-cog"></i></CardHeader>
                        <ListGroup>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                {/* 4 */}
                <div style={{ marginTop: "200px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">CREATE CLASSROOM</CardHeader>
                        <ListGroup>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>)
    }

}

export default LeftCounter;

