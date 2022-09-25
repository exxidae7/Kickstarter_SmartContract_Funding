import web3 from './web3.js';

import CampaignFactory from './build/CampaignFactory.json' 

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
    "0x54ee19B89E973481Ea37E4673BA09bA923ff0745"
);


export default instance;