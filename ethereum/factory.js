import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
    '0x233013A4Adf35A3b1eA680b990994a400852a170')
export default instance;