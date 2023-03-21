import React from 'react';
import SearchEvent from './SearchEvent'
import EventsSection from './EventsSection';

import { Container } from 'reactstrap';

import './Events.css';

export default function Events() {

    return (
        <div className='parentContainer'>
            <img src='images/image21.png' className='imageHeader' alt='' />
            <SearchEvent />
            <Container className='content'>
                <EventsSection />
            </Container>
        </div>
    )

}
