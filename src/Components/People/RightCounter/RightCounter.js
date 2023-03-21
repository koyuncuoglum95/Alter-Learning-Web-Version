import React from 'react';
import { Card, CardHeader, CardImg, CardBody, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './RightCounter.css';


class RightCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader as="h5" className='cardheader1' align="left">MY PROFILE <i align="right" class="fas fa-cog"></i></CardHeader>
                    <div>
                    <CardImg
                        width="50px"
                        height="150px"
                        src="images/widget2.jpeg" />
                        <div className='image' align="center">
                        <img src="images/v443_23123.png"  class="rounded-circle" width="100" />
                        </div>
                    </div> 
                    <ListGroup>
                        <ListGroupItem>WELCOME BACK, NOAH!</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            {/* 2 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader2' as="h5" align="left">CLASSROOMS<i class="fas fa-cog"></i></CardHeader>
                    <CardBody className='cardBody'>
                    </CardBody>
                </Card>

            </div>

            {/* 3 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader3' as="h5" align="left">MY STUFF</CardHeader>
                    
                        <ListGroup>
                            <ListGroupItem align="left"><i class="far fa-bookmark"></i> &nbsp; MY BOOKMARKS</ListGroupItem>
                            <ListGroupItem align="left"><i class="fas fa-camera"></i> &nbsp; MY PICTURES</ListGroupItem>
                            <ListGroupItem align="left"><i class="fas fa-video"></i> &nbsp; MY VIDEOS</ListGroupItem>
                            <ListGroupItem align="left"><i class="fas fa-pencil-alt"></i> &nbsp; MY BLOGS</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-comment"></i> &nbsp; MY WIRES</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-comment-alt"></i> &nbsp; MY COMMENTS</ListGroupItem>
                        </ListGroup>
                    
                </Card>
            </div>

            {/* 4 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader4' as="h5" align="left">MESSAGES <i class="fas fa-search"></i> <i class="fas fa-cog"></i></CardHeader>
                    <ListGroup>
                        <ListGroupItem>Austin W.</ListGroupItem>
                        <ListGroupItem>Ruby N.</ListGroupItem>
                        <ListGroupItem>Jayden H.</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            {/* 5 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader5' as="h5" align="left">CONTACT US</CardHeader>
                    <ListGroup>
                            <ListGroupItem align="left"><img height="30" width="30" src="images/v443_23128.png"/> &nbsp;ALTER LEARNING CONNECT</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-building"></i> &nbsp; MAILING ADDRESS <br/>2748 Ganges PI, Davis, CA 95616</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-envelope"></i> &nbsp; EMAIL <br/>Support@AlterLearning.com</ListGroupItem>
                            <ListGroupItem align="left"><i class="fas fa-phone-alt"></i> &nbsp; PHONE <br/>(530)601-8275</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-instagram"></i> &nbsp; INSTAGRAM<br/>@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-facebook-f"></i> &nbsp; FACEBOOK <br/>@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-linkedin-in"></i> &nbsp; LINKEDIN <br/>@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-twitter"></i> &nbsp; TWITTER <br/>@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-question-circle"></i> &nbsp; FAQ <br/>Frequently Asked Questions</ListGroupItem>
                        </ListGroup>
                </Card>
            </div>
        </div>)
    }



}

export default RightCounter;