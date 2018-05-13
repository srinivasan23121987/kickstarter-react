import React, { Component } from 'react';
import { Input, Button, Container, Form, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';
export default class CampaignNewComponent extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true,errorMessage:'' });
        try {
            let minimumContribution = this.state.minimumContribution;
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(minimumContribution).send({ from: accounts[0] });
            Router.pushRoute("/");
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }
    render() {
        let paddingtop = {
            'padding-top': '20px'
        }

        return (<div><Layout /><Container><h3 style={paddingtop}>Add New Campaign</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field><label>Minimum Contribution</label><Input label='wei' onChange={event => { this.setState({ minimumContribution: event.target.value }); return event.target.value; }} labelPosition='right' placeholder='100' /></Form.Field>
                <Button loading={this.state.loading} primary>Submit</Button>
                <Message error negative>
                    <Message.Header>Oopss!!!</Message.Header>
                    <p>{this.state.errorMessage}</p>
                </Message>
            </Form></Container></div>)
    }
}
