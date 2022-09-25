import React , { Component } from 'react'
import Layout  from '../../components/layout'
import { Form , Button , Input , Message } from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
class CampaignNew extends Component {
     state = {
          minimumContribution : '',
          errorMessage : ''
     }

     onSubmit = async (event) =>{ 
          event.preventDefault()
          
          try{
               const accounts = await web3.eth.getAccounts()
               await factory
               .methods
               .createCampaign(this.state.minimumContribution)
               .send({
                    from : accounts[0]
               })
          }
          catch (err) {
               this.setState({ errorMessage : err.message })
          }
         
     } 
     render() { 
          return (
               <Layout>
                    <h1>Create a Campaign</h1>
                    <Form onSubmit={this.onSubmit}>
                         <Form.Field>
                              <label>
                                   Minimum Contribution Amount
                              </label>
                              <Input 
                              label="wei" 
                              labelPosition='right' 
                              value={this.state.minimumContribution}
                              onChange={
                                   event => this.setState({minimumContribution:event.target.value})
                              }
                              />
                         </Form.Field>

                         <Button primary>Create!</Button> 
                         </Form>
                    </Layout>
               
          )
 
     }
}

export default CampaignNew