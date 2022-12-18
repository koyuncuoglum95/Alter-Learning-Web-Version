import React from 'react';
import './CaliforniaContent.css';
import {Table} from 'reactstrap';


class CaliforniaContent extends React.Component{
    render(){
        return(
            <div className='div' align="center">
                <Table className='table_ac'>
                    <tr>
                        <td className='td_ac'>
                            <p align="left">Please note that Alter Learning has placed a new California Notice of Rights California Notice of Rights on its website to explain how California residents may exercise their privacy rights under the California Consumer Privacy Act. This notice is incorporated into this policy.</p>
                            <p align="left">Generally, under this law, California residents have the right to know what Alter Learning is Sharing with third parties for direct marketing purposes. California residents have the right to request the identity of any third parties to</p>
                        </td>
                        <td className='td_ac' style={{position:"absolute", top:0,right:0}}>
                            <p align="left">whom the resident’s personal information was shared, if such sharing was to enable the third party’s direct marketing efforts.</p>
                            <p align="left">If you are a California resident and wish to make such a request, please submit your request to <a href="https://alter-learning.com/" target="_blank" rel="noreferrer">www.alter-learning.com</a> OR to opt-out of having your personal information shared with third parties for their direct marketing purposes, please email us at <a href="mailto:privacy@alter-learning.com">privacy@alter-learning.com</a></p>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default CaliforniaContent;
