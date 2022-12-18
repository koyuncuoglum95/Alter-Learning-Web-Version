import React from 'react';
import './PrivacyContent.css';
import {Table} from 'reactstrap';


class PrivacyContent extends React.Component{
    render(){
        return(
            <div className='div' align="center">
                <Table className='table_privacy'>
                    <tr>
                        <td className='td_privacy' >
                            <p align="left">This Privacy Policy Notice applies to your use of www.alter-learning.com and any other websites, applications, or services provided, owned, or operated by ALTER-LEARNING EDUCATIONAL PLATFORM, INC.,</p>
                            <p align="left">(Collectively with its affiliates, “Alter-Learning” or “We”) consisting of the website available at https://www.alter-learning.com, and its network of websites, software applications, or any other products or services offered by Alter-Learning (the “Alter-Learning Services”). Other services offered by Alter-Learning may be subject to separate terms.</p>
                            <p align="left">Alter-Learning values the privacy of users, subscribers, publishers, members, and others who visit and use the Alter-Learning Services (collectively or individually, “you” or “users”) and wants you to be familiar with how we collect, use, and disclose personal information from and about you. This notice describes our Privacy Policy. By visiting www.alter-learning.com, setting up your Alter-Learning account, or using the Alter-Learning Services, you are accepting the practices described in this Privacy Notice, to the extent permitted by law.</p>
                        </td>
                        <td className='td_privacy' style={{position:"absolute",top:0,right:0}}>
                            <p align="left">For purposes of data protection laws, ALTER-LEARNING EDUCATIONAL PLATFORM, INC. located at 2748 Ganges Place, Davis CA 95616, is the “data controller” of your information collected in connection with the Alter-Learning Services.</p>
                            <p align="left">You may share personal information when using the Alter-Learning Services. One example is when you provide information about yourself as part of the Alter-Learning account creation process. Another is when you take certain actions on the Alter-Learning Services that are public or intended to be public in nature, such as when you broadcast content, participate in a chat room, post profile information, follow a channel, or subscribe to a broadcast channel. Given the social nature of some of the Alter-Learning Services, that information may be collected, used, or disclosed by others who are part of that social interaction. In addition, some features of the Alter-Learning Services are designed to provide others with information about user activity, such as identifying the user who created a particular Clip or the subscription status of users for a given channel. We encourage you to be mindful of this when considering your activity on the Alter-Learning Services.</p>
                            <p align="left">Storage and access to cookies that are set in connection with the Alter-Learning Services are governed by the Alter-Learning Cookie Policy (“Cookie Policy”).</p>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default PrivacyContent;
