import React from 'react';
import { Card, CardHeader, CardBody, CardImg, Col, Row} from 'reactstrap';
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
                    <Card className='testcard' style={{ width: '750px', height: '334px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY SCHOOL  <i class="fas fa-cog"></i></CardHeader>
                        <Row>
                                <Col>
                                <div>
                                <CardImg
                                       width="100%"
                                       height="306px"
                                        src="images/widget8.jpeg" />
                                </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h4>SUSAN B. ANTHONY MIDDLE SCHOOL</h4>
                                        <div>
                                            <h4>56 POSTS</h4>
                                            <h4>4412 FRIENDS</h4>
                                        </div>
                                        <div>
                                            <h4>PRINCIPAL</h4>
                                            <h4>VICE PRINCIPAL</h4>
                                        </div>
                                        <div>
                                            <h4>FACULTY</h4>
                                            <div></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </Card>
                </div>

                {/* 2 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '594px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY BOOKMARKS  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                            <div>
                                <h3>BOOKMARKS (29)</h3>
                                <div className='bookmark-list' style={{ height: '400px' }}>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="90%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* 3 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '600px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY PICTURES  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        <div>
                                <h3>BOOKMARKS (29)</h3>
                                <div className='bookmark-list' style={{ height: '400px' }}>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="90%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* 4 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '606px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY VIDEOS  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        <div>
                                <h3>BOOKMARKS (29)</h3>
                                <div className='bookmark-list' style={{ height: '400px' }}>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="90%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* 5 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '392px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY BLOGS  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                            <div className='bookmark-list' style={{ height: '400px' }}>
                            <div style={{ width: '25%',height: '50%',border: '1px solid white' }}>
                                    <CardImg
                                       width="90%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>
                                  <div style={{ width: '25%',height: '50%', border: '1px solid white' }}>
                                    <CardImg
                                       width="100%"
                                       height="60%"
                                        src="images/widget8.jpeg" />
                                  </div>                            
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* 6 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '639px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY WIRES  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        </CardBody>
                    </Card>
                </div>

                {/* 7 */}
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '750px', height: '586px', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY COMMENTS  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        </CardBody>
                    </Card>
                </div>



            </div>)
    }

}

export default LeftCounter;

