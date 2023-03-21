import React from 'react';
import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';
import { Row, Col, Container } from 'reactstrap';
import './Classroom.css';

class Classroom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container className='content'>
                    <div><LeftCounter /></div>
                    <div><RightCounter /></div>
                </Container>
            </div>
        )
    }
}

export default Classroom;