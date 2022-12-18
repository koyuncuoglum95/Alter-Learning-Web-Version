import React from 'react';
import Helmet from "react-helmet";
import CaliforniaContent from './CaliforniaContent';
import California from './California';
import './CaliforniaPage.css';


const CaliforniaPage = () =>  {
    return(
        <>
            <Helmet>
                <title>Alter Learning Educational Platform - California</title>
                <meta name="description" content="Alter Learning Educational Platform - California" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>
            <div style={{marginBottom:"50%"}}>
                <p className='text_cp'>Alter-Learning Education Platform, Inc.</p>
                <h2 className='header_cp'>California Privacy Policy</h2>
                <CaliforniaContent/>
                <California/>
            </div>
        </>
    )
}


export default CaliforniaPage;
