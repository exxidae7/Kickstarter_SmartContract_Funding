import web3 from './web3.js';

import CampaignFactory from './build/CampaignFactory.json' 

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
    "0x0fd489857A30048eE618D96ddc029A3AfAEb7199"
);


export default instance;