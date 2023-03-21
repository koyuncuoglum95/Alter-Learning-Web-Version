import React from 'react';
import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';
import { Row, Col, Container } from 'reactstrap';
import './ManageAccount.css'

class Manage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main-container">
                <Container className='content'>
                    <div><LeftCounter /></div>
                    <div><RightCounter /></div>
                </Container>
            </div>
        )
    }
}

export default Manage;