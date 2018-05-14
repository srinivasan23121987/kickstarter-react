import React, { Component } from 'react';
import { Form, Button, Message, Container, Input } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
export default class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false
    }
    static async getInitialProps(props) {
        const { address } = props.query;
        return { address }
    }
    onSubmit = async (event) => {
        this.setState({ errorMessage: '', loading: true });
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description, web3.utils.toWei(value, "ether"), recipient).send({
                from: accounts[0]

            });
            this.setState({ errorMessage: '', loading: false });
        } catch (err) {
            this.setState({ errorMessage: err.message, loading: false });
        }
    }
    render() {
        let margintop = {
            'padding-top': '20px'
        }
        return (<div><Layout /><Container>
            <h3 style={margintop}>Create New Request</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={event => { this.setState({ description: event.target.value }) }} />
                </Form.Field>
                <Form.Field>
                    <label>Amount in Ether</label>
                    <Input value={this.state.value} onChange={event => { this.setState({ value: event.target.value }) }} />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input value={this.state.recipient} onChange={event => { this.setState({ recipient: event.target.value }) }} />
                </Form.Field>
                <Message negative error>
                    <Message.Header>Oopss!!!</Message.Header>
                    <p>{this.state.errorMessage}</p>
                </Message>
                <Button loading={this.state.loading} primary>Create Request</Button>
            </Form>
        </Container></div>)
    }
}
