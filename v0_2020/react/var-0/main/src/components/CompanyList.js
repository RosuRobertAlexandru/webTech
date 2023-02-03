import React, { Component } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

class CompanyList extends Component {
	constructor(){
		super()
		this.state = {
			companies : []
		}
		this.store=new CompanyStore();
		this.delete = (company) => {
			this.store.deleteOne(company)
		}
	}
	componentDidMount(){
		this.store = new CompanyStore()
		this.setState({
			companies : this.store.getAll()
		})
		console.log(this.state.companies)
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				companies : this.store.getAll()
			})			
		})
	}
  render() {
    return (
      <div>
		  {
			  this.state.companies.map((el,i)=>
				  <Company item={el} key={i} onDelete={()=>{this.delete(el.id)}}/>
			  )
		  }
      </div>
    )
  }
}

export default CompanyList
