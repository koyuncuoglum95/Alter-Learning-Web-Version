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
                    <CardHeader className='cardheader2' as="h5" align="left">SHOPPING CART <i class="fal fa-shopping-cart"></i></CardHeader>
                    
                        <ListGroup>
                            <ListGroupItem align="left">VR Playgrounds ($30.00)</ListGroupItem>
                            <ListGroupItem align="left">VR Human Anatomy ($30.00)</ListGroupItem>
                            <ListGroupItem align="left">Gardens ($30.00)</ListGroupItem>
                            <ListGroupItem align="left">VR Whiteboard ($30.00)</ListGroupItem>
                            <ListGroupItem align="left">Total of 4 items ($120.0) (Ca State Tax 7.5%) <br/>Final Sale ($129.00)?</ListGroupItem>
                        </ListGroup>
                    
                </Card>
            </div>
            {/* 3 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader3' as="h5" align="left"> BROWSE GENRE  <i class="fas fa-search"></i></CardHeader>
                    <ListGroup>
                            <ListGroupItem align="left"><i class="far fa-robot"></i> ACTION</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-ship"></i> ADVENTURE</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-dice-six"></i> ROLE PLAYING</ListGroupItem>
                            <ListGroupItem align="left"><i class="fal fa-puzzle-piece"></i> PUZZLE</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-brain"></i> STRATEGY</ListGroupItem>
                            <ListGroupItem align="left"><i class="fal fa-football-ball"></i> SPORTS</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-car-side"></i> RACING</ListGroupItem>
                        </ListGroup>
                </Card>
            </div>

            
            {/* 4 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "150%", height: "60%", borderRadius: 8 }} >
                    <CardHeader className='cardheader4' as="h5" align="left">CONTACT US</CardHeader>
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