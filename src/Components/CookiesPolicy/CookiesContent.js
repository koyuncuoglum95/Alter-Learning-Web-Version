import React from 'react';
import './CookiesContent.css';
import {Table} from 'reactstrap';


class CookiesContent extends React.Component{
    render(){
        return(
            <div className='div' align="center">
                <Table className='table_cookies'>
                    <tr>
                        <td className='td_cookies'>
                            <p className='para_cookies' align="left">This Cookie Notice applies to your use of <a href="https://alter-learning.com/" target="_blank" rel="noreferrer" className="global_link">www.alter-learning.com</a>, and all other websites, applications, or services provided by ALTER LEARNING EDUCATIONAL PLATFORM, INC. (with its affiliates, “Alter-Learning” “we” or “us”) that link to this Cookie Notice (collectively, the “Alter-Learning Services”). Alter-Learning uses certain technologies to collect information that helps us improve your online experience. In this Cookie Policy, we refer to these technologies, which include cookies, pixels, web beacons, and gifs, collectively as “cookies.” This policy explains the different types of cookies used on the Alter-Learning Services and how you can control them. We may change this Cookie Policy at any time: please take a look at the “last modified” legend at the top of this page to see when this Cookie Policy was last revised. Any changes in this Cookie Policy will become effective when we make the revised Cookie Policy available on or through the Alter-Learning Services.</p>
                        </td>
                        <td className='td_cookies' style={{position:"absolute",top:0,right:0}}>
                            <p className='para_cookies' align="left">By visiting <a href="https://alter-learning.com/" target="_blank" rel="noreferrer" className="global_link">www.alter-learning.com</a>, setting up your Alter-Learning account or using the Alter-Learning Services or any service of ours that links to this Cookie Policy, you expressly consent to information handling practices and storage and access of cookies as described in this Cookie Policy Notice.</p>
                            <p className='para_cookies' align="left">We hope that this policy helps you understand, and feel more confident about, our use of cookies. If you have any further queries, please contact us at <a href="mailto:privacy@alter-learning.com" className="global_link">privacy@alter-learning.com</a></p>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default CookiesContent;
