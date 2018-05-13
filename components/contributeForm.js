import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
export default class ContributeForm extends Component {
    state = {
        value: '',
        errorMessages: '',
        loading: false
    };
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const campaign = Campaign(this.props.address);
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            this.setState({ loading: false });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }
        catch (err) {
            
            this.setState({ loading: false,errorMessages: err.message });
        }
    }
    render() {
        let margintop = {
            'margin-top': '10px'
        }
        let breakwords={
            'overflow-wrap':'break-word'
        }
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessages}>
                <Form.Field>
                    <label>Enter the amount to contribute</label>
                    <Input onChange={event => this.setState({ value: event.target.value })} label="ether" labelPosition="right"></Input>
                    <Button loading={this.state.loading} style={margintop} primary>Contribute</Button>
                    <Message negative error style={breakwords}>
                        <Message.Header>Oopss!!!</Message.Header>
                        <p> {this.state.errorMessages}</p>
                    </Message>
                </Form.Field>
            </Form>);
    }
}