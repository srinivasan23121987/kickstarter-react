
import React, {Component} from "react";
import factory from "../ethereum/factory";
// export default ()=>{
//     return <h1>Campaign List page!!!</h1>;
// }
class CampaignIndex extends Component {
    
    async componentDidMount() {
        const web3 = new Web3(web3.currentProvider);
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
    }
    render() {
        return <h1>Campaign Index</h1>
    }
}