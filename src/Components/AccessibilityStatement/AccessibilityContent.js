import React from 'react';
import './AccessibilityContent.css';
import {Table} from 'reactstrap';


class AccessibilityContent extends React.Component{
    render(){
        return(
            <div className='div' align="center" >
                <Table className='table_ac'>
                    <tr>
                        <td className='td_ac'>
                            <p  align="left" style={{ fontWeight: 'bold'}}>Welcome to Alter Learning.</p>
                            <p  align="left">As children, some of our earliest memories came from the playground. When we played together, we made cherished memories. That’s what we want Alter-Learning to be: A place where anyone can play and make memories together.</p>
                        </td>
                        <td className='td_ac'></td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default AccessibilityContent;