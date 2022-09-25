import  HDWalletProvider from '@truffle/hdwallet-provider'
import  Web3 from 'web3'
import  compiledFactory from './build/CampaignFactory.json' 

const provider = new HDWalletProvider(
  "794a20c0a854ad6b22611a4e52c56e711726aa50b23adaabd17c239f6b32130d" , 
  // remember to change this to your own phrase!
"https://rinkeby.infura.io/v3/2e1569318751492094a5627ea7ab74d9"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] })

  console.log(compiledFactory.interface)

  console.log('Contract deployed to', result.options.address)
  provider.engine.stop()
}
deploy();
