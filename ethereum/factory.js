import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
    '0xEe58f701B9345a9e2De9B60631BB1351Ccd366bd')
    export default instance;