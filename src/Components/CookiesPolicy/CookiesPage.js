import React from 'react';
import './CookiesPage.css';
import CookiesPolicy from './CookiesPolicy';
import CookiesContent from './CookiesContent';
import Helmet from 'react-helmet';


const CookiesPage = () => {
    return (
      <>
        <Helmet>
            <title>Alter Learning Educational Platform - Cookies Policy</title>
            <meta name="description" content="Alter Learning Educational Platform - Cookies Policy" />
            <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <div style={{marginBottom:"30%"}}>
            <p className='text_cookies'>Alter-Learning Education Platform, Inc.</p>
            <h2 className='header_cookies'>Cookies Policy</h2>
            <CookiesContent/>
            <CookiesPolicy/>
        </div>
      </>
    )
}


export default CookiesPage;
