
import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from '../components/layout';
import {Link} from '../routes';
import { Card, Grid, Button,Icon,Container } from 'semantic-ui-react';
class CampaignIndex extends Component {
    state = { campaignList: '' };
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        this.setState({ campaignList: campaigns })
    }
    renderCardComponent() {
        let campaignList = this.state.campaignList.toString().split(',');
        
        let items = campaignList.map(address => {
            return {
                header: address,
            description: (<Link route={`/campaigns/${address}`}><a>View Campaigns</a></Link>),
                fluid: true
            }
        });
        return items;

    }
    render() {
        let paddingtop={
            'padding-top':'20px'
        }
        return (<div><Layout /><Container><h3  style={paddingtop}>Campaign List</h3><Grid style={this.props.paddingtop}  stackable columns={2}  >      <Grid.Column width={12}>
        <Card.Group items={this.renderCardComponent()} />      </Grid.Column>
        <Grid.Column width={4}><Link route="/campaigns/new"><a><Button size='large' icon labelPosition='right'>
        Add Campaign
        <Icon name='right add' />
        </Button></a></Link></Grid.Column></Grid></Container></div>)
    }
}

export default CampaignIndex;