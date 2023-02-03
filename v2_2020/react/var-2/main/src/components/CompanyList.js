import React, { Component } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'
import CompanyDetails from './CompanyDetails'

class CompanyList extends Component {
	constructor(){
		super()
		this.state = {
			companies : [],
			selected:0,
		}
		
	}

	select=(id)=>{
		this.setState({
			selected:id
		}) 
	}
	componentDidMount(){
		this.store = new CompanyStore()
		this.setState({
			companies : this.store.getAll()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				companies : this.store.getAll()
			})			
		})
	}

	cancel=()=>{
		this.setState({selected:0})
	}

  render() {
	if (this.state.selected){
		return <CompanyDetails onCancel={this.cancel} item={this.state.selected}/>
	}
	else{
		return (
		  <div>
			{
				this.state.companies.map((e, i) => 
					<Company item={e} key={i} onSelect={this.select}/>
				)
				
			}
		  </div>
		)
	}
  }
}

export default CompanyList
