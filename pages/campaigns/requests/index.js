import React, { Component } from 'react';
import { Container,  Button } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import {Routes,Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
export default class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        return { address };
    }
    render() {
        let paddingtop = {
            'padding-top': '20px'
        }
        let margintop = {
            'padding-top': '20px'
        }
        return (<div><Layout /><Container><h3 style={margintop}>Request List</h3><Link route={`/campaigns/${this.props.address}/requests/new`}><a><Button primary>Create Request</Button></a></Link></Container></div>);
    }
}