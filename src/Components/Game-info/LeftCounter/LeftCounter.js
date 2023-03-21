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
                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">VR Stem: A Celestial Journey  <i class="fas fa-search"></i></CardHeader>
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

