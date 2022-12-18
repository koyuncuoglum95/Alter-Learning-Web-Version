import React from 'react'
import Collapsible from '../UI/Collapsible';
import './AccessibilityStatement.css';
import { Table } from 'reactstrap';


class AccessibilityStatement extends React.Component {
    render() {
        return (
            <div className='div' align="center">
                <Table className='table_acc' >
                    <tr>
                        <td className='td_acc'>
                            <Collapsible label="What are the guidelines?">
                                <p className='content'>
                                    Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_acc'>
                            <Collapsible label="How do we provide our Services?">
                                <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_acc'>
                            <Collapsible label="Exceptions">
                                <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_acc'>
                            <Collapsible label="Photosensitive Seizure Warning">
                            <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_acc'>
                            <Collapsible label="How can you help?">
                            <p className='content'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                            </Collapsible>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }

}

export default AccessibilityStatement;
