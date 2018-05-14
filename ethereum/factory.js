import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
    '0x5F7C0F4b1940DdCb7a6a47bDF139BFAeE50f227b')
    export default instance;