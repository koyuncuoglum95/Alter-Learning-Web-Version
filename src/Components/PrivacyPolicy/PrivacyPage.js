import React from 'react';
import './PrivacyPage.css';
import PrivacyPolicy from './PrivacyPolicy';
import PrivacyContent from './PrivacyContent';
import Helmet from 'react-helmet';


const PrivacyPage = () => {
    return (
        <>
            <Helmet>
                <title>Alter Learning Educational Platform - Privacy Policy</title>
                <meta name="description" content="Alter Learning Educational Platform - Privacy Policy" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>

            <div style={{marginBottom:"30%"}}>
                <p className='text_pp'>Alter-Learning Education Platform, Inc.</p>
                <h2 className='heading_pp'>Privacy Policy</h2>
                <PrivacyContent/>
                <PrivacyPolicy/>
            </div>
        </>
    )
}


export default PrivacyPage;
