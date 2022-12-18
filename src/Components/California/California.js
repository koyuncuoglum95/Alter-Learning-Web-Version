import React from 'react'
import Collapsible from '../UI/Collapsible';
import './California.css';
import { Table } from 'reactstrap';



class California extends React.Component {
    render() {
        return (
            <div className='div' align="center">
                <Table className='table_cpp' >
                    <tr>
                        <td className='td_cpp'>
                            <Collapsible label="California Residents">
                                <p className='content'>
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_cpp'>
                            <Collapsible label="European Union Citizens / Residents">
                                <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_cpp'>
                            <Collapsible label="Canadian Citizens / Residents">
                                <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_cpp'>
                            <Collapsible label="Do Not Sell My Personal Information">
                            <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_cpp'>
                            <Collapsible label="How to Contact Us">
                            <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }

}

export default California;
