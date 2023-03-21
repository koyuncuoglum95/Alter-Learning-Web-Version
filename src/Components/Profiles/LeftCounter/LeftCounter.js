import React from 'react';
import { Card, CardHeader, CardBody, CardImg} from 'reactstrap';
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
                <Card className='testcard' style={{  width: '58rem', borderRadius: 8 }} >
                    <CardHeader as="h5" className='cardheader1' align="left">JESSICA THOMPSON'S PROFILE PAGE<i align="right" class="fas fa-cog"></i></CardHeader>
                    <div>
                    <CardImg
                        width="50px"
                        height="150px"
                        src="/images/flowers.jpeg" />
                        <div className='image' align="center">
                        <img src="/images/v443_23123.png"  className='img-thumbnail' width="100" height="100" />
                        <p align="left">"You're off to great places! Today is your day.!Your mountain is waiting, So, get on your way!"</p>
                        </div>
                    </div> 
                    <ListGroup>
                        <ListGroupItem>@JessDaBest</ListGroupItem>
                        <ListGroupItem>Jessica Thompson</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>

               {/* 2 */}
               <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">MY PICTURES  <i class="fas fa-cog"></i></CardHeader>
                        <CardBody className='cardBody'>
                        </CardBody>
                    </Card>
                </div>

                {/* 3 */}
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

