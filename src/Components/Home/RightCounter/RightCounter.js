import React from 'react';
import { Card, CardHeader, CardImg } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './RightCounter.css';


class RightCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {
        return (
            <div>
                {/* Profile Card */}
                <div>
                    <Card className='profile'>
                        <CardHeader as="h5" className='cardheader1' align="left">MY PROFILE <i align="right" class="fas fa-cog"></i></CardHeader>
                        <div>
                            <CardImg
                                width="50px"
                                height="150px"
                                src="images/widget2.webp" />
                            <div className='image' align="center">
                                <img src="images/v443_23123.webp" width="100" alt="" />
                            </div>
                        </div>
                        <ListGroup>
                            <ListGroupItem>WELCOME BACK, NOAH!</ListGroupItem>
                            <ListGroupItem>@Pizza.Monster23</ListGroupItem>
                            <ListGroupItem>NOAH VILLANUEVA</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                {/* Contact */}
                <div>
                    <Card className='contact' >
                        <CardHeader className='cardheader7' as="h5" align="left">CONTACT US</CardHeader>
                        <ListGroup>
                            <ListGroupItem align="left"><img height="30" width="30" src="images/v443_23128.webp" alt="" /> &nbsp;ALTER LEARNING CONNECT</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-building"></i> &nbsp; MAILING ADDRESS <br />2748 Ganges PI, Davis, CA 95616</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-envelope"></i> &nbsp; EMAIL <br />Support@AlterLearning.com</ListGroupItem>
                            <ListGroupItem align="left"><i class="fas fa-phone-alt"></i> &nbsp; PHONE <br />(530)601-8275</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-instagram"></i> &nbsp; INSTAGRAM<br />@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-facebook-f"></i> &nbsp; FACEBOOK <br />@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-linkedin-in"></i> &nbsp; LINKEDIN <br />@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="fab fa-twitter"></i> &nbsp; TWITTER <br />@AlterLearning</ListGroupItem>
                            <ListGroupItem align="left"><i class="far fa-question-circle"></i> &nbsp; FAQ <br />Frequently Asked Questions</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>)
    }
}

export default RightCounter;