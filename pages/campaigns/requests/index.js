import React, { Component } from 'react';
import { Container, Button, Table } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import RequestRow from '../../../components/RequestRow';
import { Routes, Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
export default class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        // console.log("ApproversCount"+requestCount);
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                console.log(index)
                return campaign.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount, approversCount };
    }
    renderRow() {
        // console.log(this.props.requestCount);
        return this.props.requests.map((request, index) => {
            
            return (<RequestRow key={index} id={index} request={request} approversCount={this.props.approversCount} address={this.props.address}></RequestRow>)
        })
    }
    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        let paddingtop = {
            'padding-top': '20px'
        }
        let margintop = {
            'padding-top': '20px'
        }
        console.log(this.renderRow())
        return (<div><Layout /><Container><h3 style={margintop}>Request List</h3><Link route={`/campaigns/${this.props.address}/requests/new`}><a><Button primary>Create Request</Button></a></Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRow()}
                </Body>


            </Table>
        </Container></div>);
    }
}