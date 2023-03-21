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
        </div>)
    }



}

export default RightCounter;