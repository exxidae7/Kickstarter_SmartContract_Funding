import React , { Component } from 'react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import { Card , Grid  , Button} from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'
import { Link } from '../../routes'

class  CampaignShow extends Component {
     static async getInitialProps(props) {
          const campaign = Campaign(props.query.address)
          const summary = await campaign.methods.getSummary().call()
          console.log(summary)
          return {
               address: props.query.address,
               minimumContribution : summary[0],
               balance : summary[1],
               requestsCount : summary[2],
               approversCount : summary[3],
               manager : summary[4]
          }
     }
     recentCards(){
          const {
               balance , 
               manager , 
               minimumContribution,
               requestsCount,
               approversCount
          } = this.props;
          const items = [
               {
                    header : manager,
                    meta : 'Address  of Manager',
                    description : 'The manager created this campaign and can create requests to withdraw money',
                    style : {overflowWrap : 'break-word'}
                    
               },
               {
                    header : minimumContribution,
                    meta : 'Minimum contribution',
                    description : 'You must atleast contribute more than 100 wei to be part of this Campaign',
                
                    
               },
               {
                    header : web3.utils.fromWei(balance, 'ether'),
                    meta : 'Total Balance',
                    description : 'Total money have left',
  
                    
               },
               {
                    header : requestsCount,
                    meta : 'Requests Count',
                    description : 'A request tries to withdraw money from the contracts , must be apply by approvers',
                    
                    
               },{
                    header : approversCount,
                    meta : 'Approver Count',
                    description : 'Number of people have been donated to this Campaign',
                 
                    
               }
          ]
          return <Card.Group items={items} />
     }

     render() {
          return(
               <Layout> 
          <h3>Campaign show</h3>

<Grid>
     <Grid.Row>
     <Grid.Column width={10}>
     {this.recentCards()}
    
     </Grid.Column>

     <Grid.Column width={6}>
     <ContributeForm address={this.props.address} />
     </Grid.Column>
     </Grid.Row>
     <Grid.Row>
          <Grid.Column>
     <Link route={`/campaigns/${this.props.address}/requests` }>
          <a>
          <Button primary>View Requests</Button>
          </a>
     </Link>
     </Grid.Column>
     </Grid.Row>

</Grid>

   
          
               </Layout>
          )
     }

}

export default CampaignShow