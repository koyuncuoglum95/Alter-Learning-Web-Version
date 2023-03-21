import React from 'react';
import { Container } from 'reactstrap';
import './Games.css';
import GamesLibrary from './GamesLibrary/GamesLibrary';
import Header from './Header';


export default function Games() {
    return (
        <div className='wrapper'>
            <Container className='content'>
                <Header />
                <GamesLibrary />
            </Container>
        </div>
    )
}