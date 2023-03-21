import React from 'react';
import { Card, CardHeader, CardBody, CardImg, Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
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
                        <CardHeader as="h5" align="left">FRIEND REQUESTS <i class="fas fa-cog"></i></CardHeader>
                        <ListGroup>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                {/* 2 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">FINDER  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        </CardBody>
                    </Card>
                </div>

                {/* 3 */}
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

                {/* 4 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY FRIENDS  <i class="fas fa-cog"></i></CardHeader>
                        <ListGroup>
                            <ListGroupItem>FRIENDS LIST (63)</ListGroupItem>
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

