import React from 'react';
import Helmet from "react-helmet";
import AccessibilityStatement from './AccessibilityStatement';
import AccessibilityContent from './AccessibilityContent';
import './AccessibilityPage.css';


const AccessibilityPage = () =>  {
    return(
        <>
            <Helmet>
                <title>Alter Learning Educational Platform - Accessibility Statement</title>
                <meta name="description" content="Alter Learning Educational Platform - Accessibility Statement" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>
            <div style={{marginBottom:"30%"}}>
                <p className='text_ap'>Alter-Learning Education Platform, Inc.</p>
                <h2 className='header_ap'>Accessibility Statement</h2>
                <AccessibilityContent/>
                <AccessibilityStatement/>
            </div>
        </>
    )
}

export default AccessibilityPage;
