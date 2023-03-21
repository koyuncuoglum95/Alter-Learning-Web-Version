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
                        <CardHeader as="h5" align="left">MARKET</CardHeader>
                        <CardImg width="100%" height="92%"src="images/v443_23035.png" alt="Card image cap" />
                    </Card>
                </div>

                {/* 2 */}
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div style={{ marginTop: "50px" }}>
                                    <Card className='cardgame' style={{ width: '27rem', borderRadius: 8 }}>
                                        <CardHeader as="h5" align="left">FEATURED GAME <i class="far fa-heart"></i> <i class="fal fa-shopping-cart"></i></CardHeader>
                                        <CardImg top width="100%" src="images/v443_23035.png" alt="Card image cap" />
                                        <CardFooter>VR Stem: A Celestial Journey <br/>VR| Adeventure | Released on 06.22.21</CardFooter>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: "50px" }}>
                                    <Card className='cardgame' style={{ width: '27rem', borderRadius: 8 }}>
                                        <CardHeader as="h5" align="left">FEATURED GAME <i class="far fa-heart"></i> <i class="fal fa-shopping-cart"></i></CardHeader>
                                        <CardImg top width="100%" src="images/v443_23018.png" alt="Card image cap" />

                                        <CardFooter>GENE-X Evolutions <br/>VR| Action | Puzzle | Released on 06.15.21</CardFooter>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> 

                {/* 3 */}
                <div style={{ marginTop: "200px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">GAME MARKETPLACE <i class="fas fa-search"></i></CardHeader>
                        <ListGroup>
                            <ListGroupItem>VR Stem: A Celestial Journey <br/>VR| Adeventure | Released on 06.22.21</ListGroupItem>
                            <ListGroupItem>GENE-X Evolutions <br/>VR| Action | Puzzle | Released on 06.15.21</ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>)
    }

}

export default LeftCounter;

