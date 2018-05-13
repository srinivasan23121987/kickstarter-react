import React, { Component } from 'react';
import Layout from '../../components/layout';
import { Card, Container, Grid } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards() {
        const { minimumContribution, balance, requestsCount, approversCount, manager } = this.props;
        const items = [{
            header: manager,
            description: 'Address of manager',
            meta: 'The manager created this campaign and can create request to withdraw money',
            style: { 'overflowWrap': 'break-word' }
        }, {
            header: minimumContribution,
            description: 'Minimum Contribution (wei)',
            meta: 'You must contribute atleast this much wei to become a approver',
            style: { 'overflowWrap': 'break-word' }
        }, {
            header: requestsCount,
            description: 'Request Count',
            meta: 'Request to withdraw money, No of request created by Manager to withdraw money',
            style: { 'overflowWrap': 'break-word' }
        }, {
            header: approversCount,
            description: 'Approvers Count',
            meta: 'Approvers who have approve the money request',
            style: { 'overflowWrap': 'break-word' }
        }, {
            header: web3.utils.fromWei(balance, 'ether'),
            description: 'Campaign Balance',
            meta: 'Balance money required to spend this campaign',
            style: { 'overflowWrap': 'break-word' }
        }
        ];
        return <Card.Group items={items} />;

    }
    render() {
        let paddingtop = {
            'padding-top': '20px'
        }
        let margintop = {
            'margin-top': '10px'
        }
        console.log(this.props.address);
        return (<div><Layout></Layout><Container style={paddingtop}><h3>Campaign Details</h3> <Grid stackable columns={2}  ><Grid.Column width={10}>{this.renderCards()}</Grid.Column><Grid.Column width={6}><ContributeForm address={this.props.address}></ContributeForm></Grid.Column></Grid></Container></div>)
    }
}
export default CampaignShow;