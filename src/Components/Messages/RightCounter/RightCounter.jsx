import React from 'react';
import { Card, CardHeader, CardImg, CardBody, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TbMailForward } from "react-icons/tb";
import { BsPersonDash } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { friendList } from "./Mocks/friendlistmock";
import './RightCounter.css';


class RightCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="rightCards">
            <div>
                <Card className='testcard' style={{ width: "300%", height: "403px", borderRadius: 8 }} >
                    <CardHeader as="h5" className='cardheader1' align="left">MY PROFILE <i align="right" class="fas fa-cog"></i></CardHeader>
                    <div>
                    <CardImg
                        width="50px"
                        height="100px"
                        src="images/widget2.jpeg" />
                        <div className='image' align="center">
                        <img src="images/v443_23123.png" width="100" />
                        </div>
                    </div> 
                    <ListGroup>
                        <ListGroupItem>WELCOME BACK, NOAH!</ListGroupItem>
                        <ListGroupItem>
                            <p><div>@Pizza.Monster23</div><div>Online</div></p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p><div>NOAH VILLANUEVA</div><div>63 FRIENDS</div></p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p><div>STUDENT | SUSAN S. ANTHONY MIDDLE SCHOOL</div><div>SAN FRANCISCO, CALIFORNIA</div></p>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </div>

            {/* 2 */}
            <div style={{ marginTop: "100px" }}>
                <Card className='testcard' style={{ width: "300%", height: "670px", borderRadius: 8 }} >
                    <CardHeader className='cardheader2' as="h5" align="left">FRIENDS LIST <BiDotsVerticalRounded size={16}/> <i class="fas fa-search"></i> <i class="fas fa-cog"></i></CardHeader>
                    <CardBody className='cardBody'>
                    <div>
                            {
                                friendList.map((friend, index) => (
                                    <div className="friend-container" key={ index } style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <img src="images/v443_23123.png" width="35" height="35" />
                                            <div>
                                              <p>{ `${friend.name} | ${friend.contact}` }</p>
                                              <p>{ `${friend.school}` }</p>
                                            </div>
                                        </div>
                                        <div>
                                            <TbMailForward size={30}/>
                                            <BsPersonDash size={30}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* 3 */}
            <div style={{ marginTop: "50px" }}>
                <Card className='testcard' style={{ width: "300%", height: "524px", borderRadius: 8 }} >
                    <CardHeader className='cardheader3' as="h5" align="left">CONTACT US</CardHeader>
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